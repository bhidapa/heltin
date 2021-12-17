package reports

import (
	"bytes"
	"context"
	_ "embed"
	"fmt"
	"net/http"
	"text/template"
	"time"

	"github.com/bhidapa/heltin/pkg/pdf"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/nullable"
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
		return err
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

//go:embed templates/treatmentheader.html
var treatmentHeaderHtml []byte

//go:embed templates/treatment.html
var treatmentHtml []byte

//go:embed templates/treatmentfooter.html
var treatmentFooterHtml []byte

//go:embed assets/bhidapa-logo.png
var bhidapaLogo []byte

//go:embed assets/djecija-dusa-treba-da-se-slusa.png
var djecijaDusaTrebaDaSeSlusaPng []byte

//go:embed assets/zastita-zdravlja.png
var zastitaZdravljaPng []byte

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
			mental_health_professional.telephone as therapist_telephone,

			public.client_full_name(client) as client_name,
			client.email as client_email,
			client.telephone as client_telephone,

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
	data := map[string]interface{}{
		"Logo":                      pdf.ToBase64Encoding(bhidapaLogo),
		"ZastitaZdravlja":           pdf.ToBase64Encoding(zastitaZdravljaPng),
		"DjecijaDusaTrebaDaSeSlusa": pdf.ToBase64Encoding(djecijaDusaTrebaDaSeSlusaPng),
		"ID":                        treatmentID,
		"Treatment":                 treatment,
		"FileCreatedBy":             fileCreatedBy,
		"FileCreatedAt":             time.Now().UTC(),
	}

	headerHTML, err := render(treatmentHeaderHtml, data)
	if err != nil {
		return nil, err
	}

	indexHTML, err := render(treatmentHtml, data)
	if err != nil {
		return nil, err
	}

	footerHTML, err := render(treatmentFooterHtml, data)
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

	return fs.NewMemFile("somehwere.pdf", pdfFileBytes), nil
}

func render(html []byte, data interface{}) (rendered []byte, err error) {
	tmplt := template.New("")

	tmplt, err = tmplt.Parse(string(definitions))
	if err != nil {
		return nil, err
	}

	tmplt, err = tmplt.Parse(string(html))
	if err != nil {
		return nil, err
	}

	buff := new(bytes.Buffer)
	err = tmplt.Execute(buff, data)
	if err != nil {
		return nil, err
	}

	return buff.Bytes(), nil
}
