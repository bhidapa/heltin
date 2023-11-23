package reports

import (
	"context"
	_ "embed"
	"errors"
	"time"

	"github.com/bhidapa/heltin/internal/file"
	"github.com/bhidapa/heltin/internal/pdf"
	"github.com/bhidapa/heltin/internal/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/date"
	"github.com/domonda/go-types/nullable"
	"github.com/domonda/go-types/strutil"
	"github.com/domonda/go-types/uu"
	"github.com/ungerik/go-fs"
)

func CreateForTreatment(ctx context.Context, treatmentID uu.ID) (fileID uu.ID, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, treatmentID)

	fileID = uu.IDv4()

	log, ctx := log.With().
		Ctx(ctx).
		UUID("treatmentID", treatmentID).
		UUID("fileID", fileID).
		SubLoggerContext(ctx)

	log.Info("Creating treatment report").Log()

	err = session.TransactionAsUserFromContext(ctx, func(ctx context.Context) error {
		pdfFile, err := buildTreatmentPDF(ctx, fileID, treatmentID)
		if err != nil {
			return err
		}

		sessionUserID, err := session.UserFromContext(ctx)
		if err != nil {
			return err
		}

		_, err = file.Write(ctx, fileID, pdfFile)
		if err != nil {
			return err
		}

		hash, err := pdfFile.ContentHash()
		if err != nil {
			return err
		}

		err = db.Conn(ctx).Insert("public.file", sqldb.Values{
			"id":         fileID,
			"name":       pdfFile.Name(),
			"hash":       hash,
			"protected":  true,
			"created_by": sessionUserID,
		})
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
		return uu.IDNil, err
	}
	return fileID, nil
}

//go:embed templates/treatment.html
var treatmentHtml []byte

func buildTreatmentPDF(ctx context.Context, fileID, treatmentID uu.ID) (pdfFile fs.MemFile, err error) {
	treatment := struct {
		// therapist shouldn't be null, but the user that created
		// the case study might not be a mental health professional
		TherapistName nullable.NonEmptyString `db:"therapist_name"`
		TherapistType nullable.NonEmptyString `db:"therapist_type"`

		ClientName    string                  `db:"client_name"`
		ClientDOBDate date.Date               `db:"client_dob"`
		ClientDOB     string                  `db:"-"`
		ClientAddress string                  `db:"client_address"`
		ClientEmail   nullable.NonEmptyString `db:"client_email"`

		Title       string                  `db:"title"`
		Description nullable.NonEmptyString `db:"description"`
		IssuedAt    string                  `db:"-"`
	}{}
	err = db.Conn(ctx).QueryRow(`
		-- TODO: support group case studies
		select
			public.therapist_full_name(therapist) as therapist_name,
			therapist."type" as therapist_type,

			public.client_full_name(client) as client_name,
			client.date_of_birth as client_dob,
			client.address as client_address,
			client.email as client_email,

			case_study_treatment.title as title,
			case_study_treatment.description as description
		from public.case_study_treatment
			inner join (public.case_study
				inner join public.client on client.id = case_study.client_id)
			on case_study.id = case_study_treatment.case_study_id
			left join public.therapist
			on therapist.user_id = case_study_treatment.created_by
		where case_study_treatment.id = $1`, treatmentID).
		ScanStruct(&treatment)
	if err != nil {
		return fs.MemFile{}, err
	}

	if treatment.Description.IsNull() {
		return fs.MemFile{}, errors.New("description is required")
	}

	treatment.ClientDOB = treatment.ClientDOBDate.Format("02.01.2006.")

	// TODO: use timezone from requester
	loc, err := time.LoadLocation("Europe/Sarajevo")
	if err != nil {
		return fs.MemFile{}, err
	}

	createdAt := time.Now().UTC()
	treatment.IssuedAt = createdAt.In(loc).Format("02.01.2006.")

	data := map[string]interface{}{
		"ID":        fileID,
		"ForID":     treatmentID,
		"CreatedAt": createdAt,

		"Logo":                      pdf.ToBase64Encoding(bhidapaLogo),
		"ZastitaZdravlja":           pdf.ToBase64Encoding(zastitaZdravljaPng),
		"DjecijaDusaTrebaDaSeSlusa": pdf.ToBase64Encoding(djecijaDusaTrebaDaSeSlusaPng),
		"Treatment":                 treatment,
	}

	headerHTML, err := render(headerHtml, data)
	if err != nil {
		return fs.MemFile{}, err
	}

	indexHTML, err := render(treatmentHtml, data)
	if err != nil {
		return fs.MemFile{}, err
	}

	footerHTML, err := render(footerHtml, data)
	if err != nil {
		return fs.MemFile{}, err
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
		return fs.MemFile{}, err
	}

	filename := "Report" + "_" + treatment.ClientName + "_" + treatment.Title + "_" + createdAt.In(loc).Format(time.RFC3339)
	return fs.NewMemFile(strutil.SanitizeFileName(filename)+".pdf", pdfFileBytes), nil
}
