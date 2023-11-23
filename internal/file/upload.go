package file

import (
	"context"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/bhidapa/heltin/internal/session"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-fs/multipartfs"
	"github.com/ungerik/go-httpx/httperr"

	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/uu"
)

func Upload(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	if !strings.Contains(r.Header.Get("Content-Type"), "multipart/form-data") {
		httperr.New(http.StatusUnsupportedMediaType).ServeHTTP(w, r)
		return
	}

	mfs, err := multipartfs.FromRequestForm(r, MaxUploadSize)
	if err != nil {
		if errors.Is(err, io.ErrUnexpectedEOF) {
			// user might cancel the request
			return
		}
		log.Error("Error while parsing form").Request(r).Err(err).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}
	defer mfs.Close()

	var preferredID uu.NullableID
	preferredRowIdVal := mfs.Form.Value["preferredRowId"]
	if len(preferredRowIdVal) > 0 {
		preferredID, err = uu.NullableIDFromString(preferredRowIdVal[0])
		if err != nil {
			httperr.New(http.StatusBadRequest, `Invalid "preferredRowIdVal" argument`).ServeHTTP(w, r)
			return
		}
	}

	relRowIdVal := mfs.Form.Value["relRowId"]
	if len(relRowIdVal) == 0 {
		httperr.New(http.StatusBadRequest, `Missing "relRowId" argument`).ServeHTTP(w, r)
		return
	}
	relID, err := uu.IDFromString(relRowIdVal[0])
	if err != nil {
		httperr.New(http.StatusBadRequest, `Invalid "relRowId" argument`).ServeHTTP(w, r)
		return
	}

	formFile, err := mfs.FormFile("file")
	if err != nil {
		httperr.New(http.StatusBadRequest, "Missing file").ServeHTTP(w, r)
		return
	}

	memFile, err := fs.ReadMemFile(ctx, formFile)
	if err != nil {
		log.Error("Error while reading form file").Request(r).Err(err).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}
	if len(memFile.FileData) == 0 {
		httperr.New(http.StatusBadRequest, "File is empty").ServeHTTP(w, r)
		return
	}

	hash, err := memFile.ContentHash()
	if err != nil {
		log.Error("Error while hashing form file").Request(r).Err(err).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}

	fileID := preferredID.GetOr(uu.IDv4())

	var inserted bool
	err = session.TransactionAsUserFromContext(ctx, func(ctx context.Context) error {
		var (
			isTreatment        bool
			isConclusion       bool
			isFormResponseFile bool
		)
		err = db.Conn(ctx).QueryRow(`
			select
				exists (select from public.case_study_treatment where id = $1),
				exists (select from public.case_study_conclusion where id = $1),
				exists (select from public.form_response where id = $1)
		`, relID).Scan(&isTreatment, &isConclusion, &isFormResponseFile)
		if err != nil {
			return err
		}
		if !isTreatment && !isConclusion && !isFormResponseFile {
			// probably rls, do nothing
			return nil
		}

		log.Info("Uploading file").
			Request(r).
			UUID("preferredID", preferredID).
			UUID("fileID", fileID).
			UUID("relID", relID).
			Str("fileName", memFile.Name()).
			Int64("fileSize", memFile.Size()).
			Bool("isTreatment", isTreatment).
			Bool("isConclusion", isConclusion).
			Bool("isFormResponseFile", isFormResponseFile).
			Log()

		switch {
		case isTreatment:
			err = db.Conn(ctx).QueryRow(`
			with created_file as (
				insert into public.file (id, name, hash, created_by)
				values ($1, $2, $3, public.viewer_user_id())
				returning true
			)
			insert into public.case_study_treatment_file (case_study_treatment_id, file_id)
			values ($4, $1)
			returning true`, fileID, formFile.Name(), hash, relID).Scan(&inserted)
		case isConclusion:
			err = db.Conn(ctx).QueryRow(`
			with created_file as (
				insert into public.file (id, name, hash, created_by)
				values ($1, $2, $3, public.viewer_user_id())
				returning true
			)
			insert into public.case_study_conclusion_file (case_study_conclusion_id, file_id)
			values ($4, $1)
			returning true`, fileID, formFile.Name(), hash, relID).Scan(&inserted)
		case isFormResponseFile:
			err = db.Conn(ctx).QueryRow(`
			with created_file as (
				insert into public.file (id, name, hash, created_by)
				values ($1, $2, $3, public.viewer_user_id())
				returning true
			)
			insert into public.form_response_file (form_response_id, file_id)
			values ($4, $1)
			returning true`, fileID, formFile.Name(), hash, relID).Scan(&inserted)
		default:
			err = errs.New("File upload relation not supported")
		}
		if err != nil {
			return db.ReplaceErrNoRows(err, nil)
		}

		// TODO: test forbidden

		_, err = Write(ctx, fileID, memFile)
		return err
	})
	if session.IsOtherThanErrForbidden(err) {
		log.Error("Error while inserting file").Request(r).Err(err).UUID("fileID", fileID).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}
	if !inserted {
		httperr.Forbidden.ServeHTTP(w, r)
		return
	}

	fileIDBytes := fileID.StringBytes()
	w.Header().Add("Content-Type", "text/plain; charset=utf-8")
	w.Header().Set("Content-Length", fmt.Sprintf("%d", len(fileIDBytes)))
	_, err = w.Write(fileIDBytes)
	if err != nil {
		log.Error("Problem while writing file").Request(r).Err(err).Log()
	}

	// TODO:
	// httperr.JSON(
	// 	http.StatusConflict,
	// 	"File already exists",
	// )
}
