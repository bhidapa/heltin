package memos

import (
	"context"
	_ "embed"
	"fmt"
	"net/http"
	"time"

	"github.com/bhidapa/heltin/pkg/pdf"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/nullable"
	"github.com/domonda/go-types/strutil"
	"github.com/domonda/go-types/uu"
	"github.com/gorilla/mux"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx/httperr"
)

func ForTreatment(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	treatmentIDVar := mux.Vars(r)["id"]
	if treatmentIDVar == "" {
		httperr.New(http.StatusBadRequest, "Missing treatment ID").ServeHTTP(w, r)
		return
	}

	treatmentID, err := uu.IDFromString(treatmentIDVar)
	if err != nil {
		httperr.New(http.StatusBadRequest, err.Error()).ServeHTTP(w, r)
		return
	}

	log, ctx := log.With().
		Ctx(ctx).
		UUID("treatmentID", treatmentID).
		SubLoggerContext(ctx)

	log.Info("Building treatment reports").Log()

	var reportsPDF *fs.MemFile
	err = session.TransactionAsUser(ctx, func(ctx context.Context) error {
		reportsPDF, err = forTreatmentInPDF(ctx, treatmentID)
		if err != nil {
			return err
		}

		sessionUserID, _ := session.UserFromContext(ctx)

		reportsPDFBytes, err := reportsPDF.ReadAll()
		if err != nil {
			return err
		}

		var fileID uu.ID
		err = db.Conn(ctx).InsertReturning("public.file", sqldb.Values{
			"name":       reportsPDF.Name(),
			"data":       reportsPDFBytes,
			"protected":  true,
			"created_by": sessionUserID,
		}, "id").Scan(&fileID)
		if err != nil {
			return err
		}

		err = db.Conn(ctx).Insert("public.case_study_treatment_file", sqldb.Values{
			"case_study_treatment_id": treatmentID,
			"file_id":                 fileID,
		})
		if err != nil {
			return err
		}

		return nil
	})
	if err != nil {
		httperr.New(http.StatusBadRequest, err.Error()).ServeHTTP(w, r)
		return
	}

	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Length", fmt.Sprintf("%d", reportsPDF.Size()))

	// TODO-db-121121 if "attachment;" is included, the PDF will be downloaded without opening in browser.
	// the benefit of initiating a download immediately is because the treatment file should be stored in
	// the db too and just downloading emphasises that
	w.Header().Set("Content-Disposition", fmt.Sprintf("filename=%q", reportsPDF.Name()))

	_, err = w.Write(reportsPDF.FileData)
	if err != nil {
		log.Error("Problem while writing treatment PDF").Err(err).Log()
	}
}

//go:embed templates/treatment.html
var treatmentHtml []byte

func forTreatmentInPDF(ctx context.Context, treatmentID uu.ID) (pdfFile *fs.MemFile, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, treatmentID)

	treatment := struct {
		// therapist shouldn't be null, but the user that created
		// the case study is not a mental health professional
		TherapistName      nullable.NonEmptyString `db:"therapist_name"`
		TherapistEmail     nullable.NonEmptyString `db:"therapist_email"`
		TherapistTelephone nullable.NonEmptyString `db:"therapist_telephone"`
		ClientName         string                  `db:"client_name"`
		ClientEmail        nullable.NonEmptyString `db:"client_email"`
		ClientTelephone    string                  `db:"client_telephone"`
		Title              string                  `db:"title"`
		Description        string                  `db:"description"`
		StartedAtTime      time.Time               `db:"started_at"`
		StartedAt          string                  `db:"-"`
		EndedAtTime        time.Time               `db:"ended_at"`
		EndedAt            string                  `db:"-"`
	}{}
	err = db.Conn(ctx).QueryRow(`
		-- TODO: support group case studies
		select
			public.mental_health_professional_full_name(mental_health_professional) as therapist_name,
			mental_health_professional.email as therapist_email,
			replace(mental_health_professional.telephone, '\s', '') as therapist_telephone,

			public.client_full_name(client) as client_name,
			client.email as client_email,
			replace(client.telephone, '\s', '') as client_telephone,

			case_study_treatment.title as title,
			case_study_treatment.description as description,

			case_study_treatment.started_at as started_at,
			case_study_treatment.ended_at as ended_at
		from public.case_study_treatment
			inner join (public.case_study
				inner join public.client on client.id = case_study.client_id)
			on case_study.id = case_study_treatment.case_study_id
			left join public.mental_health_professional
			on mental_health_professional.user_id = case_study_treatment.created_by
		where case_study_treatment.id = $1`, treatmentID).
		ScanStruct(&treatment)
	if err != nil {
		return nil, err
	}

	// TODO: use timezone from requester
	loc, err := time.LoadLocation("Europe/Sarajevo")
	if err != nil {
		return nil, err
	}
	treatment.StartedAt = treatment.StartedAtTime.In(loc).Format("02.01.2006 15:04")
	treatment.EndedAt = treatment.EndedAtTime.In(loc).Format("02.01.2006 15:04")

	fileCreatedBy, err := session.UserFromContext(ctx)
	if err != nil {
		return nil, err
	}
	fileCreatedAt := time.Now().UTC()
	data := map[string]interface{}{
		"Logo":                      pdf.ToBase64Encoding(bhidapaLogo),
		"ZastitaZdravlja":           pdf.ToBase64Encoding(zastitaZdravljaPng),
		"DjecijaDusaTrebaDaSeSlusa": pdf.ToBase64Encoding(djecijaDusaTrebaDaSeSlusaPng),
		"ID":                        treatmentID,
		"Treatment":                 treatment,
		"FileCreatedBy":             fileCreatedBy,
		"FileCreatedAt":             fileCreatedAt,
	}

	headerHTML, err := render(headerHtml, data)
	if err != nil {
		return nil, err
	}

	indexHTML, err := render(treatmentHtml, data)
	if err != nil {
		return nil, err
	}

	footerHTML, err := render(footerHtml, data)
	if err != nil {
		return nil, err
	}

	pdfFileBytes, err := pdf.RenderHTML(ctx, &pdf.RenderHTMLArgs{
		IndexHTML:    indexHTML,
		HeaderHTML:   headerHTML,
		FooterHTML:   footerHTML,
		MarginTop:    1.8,
		MarginBottom: 1.8,
		MarginRight:  0.8,
		MarginLeft:   0.8,
	})
	if err != nil {
		return nil, err
	}

	filename := "Memorandum" + "_" + treatment.ClientName + "_" + treatment.Title + "_" + fileCreatedAt.In(loc).Format(time.RFC3339)
	return fs.NewMemFile(strutil.SanitizeFileName(filename)+".pdf", pdfFileBytes), nil
}
