package memos

import (
	"context"
	_ "embed"
	"fmt"
	"net/http"
	"time"

	"github.com/bhidapa/heltin/pkg/casestudy"
	"github.com/bhidapa/heltin/pkg/pdf"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/language"
	"github.com/domonda/go-types/nullable"
	"github.com/domonda/go-types/strutil"
	"github.com/domonda/go-types/uu"
	"github.com/gorilla/mux"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx/httperr"
)

func ForConclusion(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	conclusionIDVar := mux.Vars(r)["id"]
	if conclusionIDVar == "" {
		httperr.New(http.StatusBadRequest, "Missing conclusion ID").ServeHTTP(w, r)
		return
	}

	conclusionID, err := uu.IDFromString(conclusionIDVar)
	if err != nil {
		httperr.New(http.StatusBadRequest, err.Error()).ServeHTTP(w, r)
		return
	}

	log, ctx := log.With().
		Ctx(ctx).
		UUID("conclusionID", conclusionID).
		SubLoggerContext(ctx)

	log.Info("Building conclusion reports").Log()

	fileID := uu.IDv4()
	var reportsPDF *fs.MemFile
	err = session.TransactionAsUser(ctx, func(ctx context.Context) error {
		reportsPDF, err = forConclusionInPDF(ctx, fileID, conclusionID)
		if err != nil {
			return err
		}

		sessionUserID, _ := session.UserFromContext(ctx)

		reportsPDFBytes, err := reportsPDF.ReadAll()
		if err != nil {
			return err
		}

		err = db.Conn(ctx).Insert("public.file", sqldb.Values{
			"id":         fileID,
			"name":       reportsPDF.Name(),
			"data":       reportsPDFBytes,
			"protected":  true,
			"created_by": sessionUserID,
		})
		if err != nil {
			return err
		}

		err = db.Conn(ctx).Insert("public.case_study_conclusion_file", sqldb.Values{
			"case_study_conclusion_id": conclusionID,
			"file_id":                  fileID,
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
	// the benefit of initiating a download immediately is because the conclusion file should be stored in
	// the db too and just downloading emphasises that
	w.Header().Set("Content-Disposition", fmt.Sprintf("filename=%q", reportsPDF.Name()))

	_, err = w.Write(reportsPDF.FileData)
	if err != nil {
		log.Error("Problem while writing conclusion PDF").Err(err).Log()
	}
}

//go:embed templates/conclusion.html
var conclusionHtml []byte

func forConclusionInPDF(ctx context.Context, fileID, conclusionID uu.ID) (pdfFile *fs.MemFile, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, fileID, conclusionID)

	conclusion := struct {
		// therapist shouldn't be null, but the user that created
		// the case study is not a mental health professional
		TherapistName      nullable.NonEmptyString  `db:"therapist_name"`
		TherapistEmail     nullable.NonEmptyString  `db:"therapist_email"`
		TherapistTelephone nullable.NonEmptyString  `db:"therapist_telephone"`
		ClientName         string                   `db:"client_name"`
		ClientEmail        nullable.NonEmptyString  `db:"client_email"`
		ClientTelephone    string                   `db:"client_telephone"`
		Type               casestudy.ConclusionType `db:"type"`
		Title              string                   `db:"-"`
		Description        string                   `db:"description"`
		ConcludedAtTime    time.Time                `db:"concluded_at"`
		ConcludedAt        string                   `db:"-"`
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

			case_study_conclusion."type" as "type",
			case_study_conclusion.description as description,

			case_study_conclusion.concluded_at as concluded_at
		from public.case_study_conclusion
			inner join (public.case_study
				inner join public.client on client.id = case_study.client_id)
			on case_study.id = case_study_conclusion.case_study_id
			left join public.mental_health_professional
			on mental_health_professional.user_id = case_study_conclusion.created_by
		where case_study_conclusion.id = $1`, conclusionID).
		ScanStruct(&conclusion)
	if err != nil {
		return nil, err
	}

	// TODO: use requester language
	conclusion.Title = conclusion.Type.Message(language.BA)

	// TODO: use timezone from requester
	loc, err := time.LoadLocation("Europe/Sarajevo")
	if err != nil {
		return nil, err
	}
	conclusion.ConcludedAt = conclusion.ConcludedAtTime.In(loc).Format("02.01.2006 15:04")

	createdAt := time.Now().UTC()
	data := map[string]interface{}{
		"ID":        fileID,
		"ForID":     conclusionID,
		"CreatedAt": createdAt,

		"Logo":                      pdf.ToBase64Encoding(bhidapaLogo),
		"ZastitaZdravlja":           pdf.ToBase64Encoding(zastitaZdravljaPng),
		"DjecijaDusaTrebaDaSeSlusa": pdf.ToBase64Encoding(djecijaDusaTrebaDaSeSlusaPng),
		"Conclusion":                conclusion,
	}

	headerHTML, err := render(headerHtml, data)
	if err != nil {
		return nil, err
	}

	indexHTML, err := render(conclusionHtml, data)
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

	filename := "Memorandum" + "_" + conclusion.ClientName + "_" + conclusion.Title + "_" + createdAt.In(loc).Format(time.RFC3339)
	return fs.NewMemFile(strutil.SanitizeFileName(filename)+".pdf", pdfFileBytes), nil
}
