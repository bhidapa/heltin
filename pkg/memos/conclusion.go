package memos

import (
	"context"
	_ "embed"
	"errors"
	"net/http"
	"time"

	"github.com/bhidapa/heltin/pkg/casestudy"
	"github.com/bhidapa/heltin/pkg/pdf"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/date"
	"github.com/domonda/go-types/language"
	"github.com/domonda/go-types/nullable"
	"github.com/domonda/go-types/strutil"
	"github.com/domonda/go-types/uu"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx/httperr"
)

func CreateForConclusion(ctx context.Context, conclusionID uu.ID) (fileID uu.ID, err error) {
	log, ctx := log.With().
		Ctx(ctx).
		UUID("conclusionID", conclusionID).
		SubLoggerContext(ctx)

	log.Info("Creating conclusion memo").Log()

	fileID = uu.IDv4()
	var memoPDF *fs.MemFile
	err = session.TransactionAsUser(ctx, func(ctx context.Context) error {
		memoPDF, err = buildConclusionPDF(ctx, fileID, conclusionID)
		if err != nil {
			return err
		}

		sessionUserID, _ := session.UserFromContext(ctx)

		memoPDFBytes, err := memoPDF.ReadAll()
		if err != nil {
			return err
		}

		err = db.Conn(ctx).Insert("public.file", sqldb.Values{
			"id":         fileID,
			"name":       memoPDF.Name(),
			"data":       memoPDFBytes,
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
		return uu.IDNil, httperr.New(http.StatusBadRequest, err.Error())
	}
	return fileID, nil
}

//go:embed templates/conclusion.html
var conclusionHtml []byte

func buildConclusionPDF(ctx context.Context, fileID, conclusionID uu.ID) (pdfFile *fs.MemFile, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, fileID, conclusionID)

	conclusion := struct {
		// therapist shouldn't be null, but the user that created
		// the case study might not be a mental health professional
		TherapistName    nullable.NonEmptyString `db:"therapist_name"`
		TherapistType    string                  `db:"therapist_type"` // TODO: use therapist type type
		TherapistSubType nullable.NonEmptyString `db:"therapist_sub_type"`

		ClientName    string                  `db:"client_name"`
		ClientDOBDate date.Date               `db:"client_dob"`
		ClientDOB     string                  `db:"-"`
		ClientAddress string                  `db:"client_address"`
		ClientEmail   nullable.NonEmptyString `db:"client_email"`

		Type            casestudy.ConclusionType `db:"type"`
		Title           string                   `db:"-"`
		Description     nullable.NonEmptyString  `db:"description"`
		ConcludedAtTime time.Time                `db:"concluded_at"`
		ConcludedAt     string                   `db:"-"`
		IssuedAt        string                   `db:"-"`
	}{}
	err = db.Conn(ctx).QueryRow(`
		-- TODO: support group case studies
		select
			public.mental_health_professional_full_name(mental_health_professional) as therapist_name,
			mental_health_professional."type" as therapist_type,
			null as therapist_sub_type,

			public.client_full_name(client) as client_name,
			client.date_of_birth as client_dob,
			client.address as client_address,
			client.email as client_email,

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

	if conclusion.Description.IsNull() {
		return nil, errors.New("description is required")
	}

	conclusion.ClientDOB = conclusion.ClientDOBDate.Format("02.01.2006.")

	// TODO: use requester language
	conclusion.Title = conclusion.Type.Message(language.BA)

	// TODO: use timezone from requester
	loc, err := time.LoadLocation("Europe/Sarajevo")
	if err != nil {
		return nil, err
	}

	createdAt := time.Now().UTC()
	conclusion.IssuedAt = createdAt.In(loc).Format("02.01.2006.")
	conclusion.ConcludedAt = conclusion.ConcludedAtTime.In(loc).Format("02.01.2006 15:04")

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
