package file

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"net/http"

	"github.com/bhidapa/heltin/pkg/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/uu"
	"github.com/gorilla/mux"
	"github.com/ungerik/go-httpx/httperr"
)

func Download(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	fileIDVar := mux.Vars(r)["id"]
	if fileIDVar == "" {
		httperr.New(http.StatusBadRequest, "Missing file ID").ServeHTTP(w, r)
		return
	}

	fileID, err := uu.IDFromString(fileIDVar)
	if err != nil {
		httperr.New(http.StatusBadRequest, err.Error()).ServeHTTP(w, r)
		return
	}

	defer errs.WrapWithFuncParams(&err, ctx, fileID)

	var filename string
	err = session.TransactionAsUserFromContext(ctx, func(ctx context.Context) error {
		return db.Conn(ctx).QueryRow("select name from public.file where id = $1", fileID).Scan(&filename)
	})
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			httperr.New(http.StatusNotFound).ServeHTTP(w, r)
			return
		}
		log.Error("Problem while reading file from database").Request(r).Err(err).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}

	fsfile, err := FileFromID(ctx, fileID)
	if err != nil {
		if errors.Is(err, ErrNotExist) {
			httperr.New(http.StatusNotFound).ServeHTTP(w, r)
			return
		}
		log.Error("Problem while reading file from filesystem").Request(r).Err(err).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}

	fileData, err := fsfile.ReadAll(ctx)
	if err != nil {
		log.Error("Problem while reading file data").Request(r).Err(err).Log()
		httperr.New(http.StatusInternalServerError).ServeHTTP(w, r)
		return
	}

	log.Info("Downloading file").
		Request(r).
		UUID("fileID", fileID).
		Str("fileName", filename).
		Int("fileSize", len(fileData)).
		Log()

	w.Header().Set("Content-Type", http.DetectContentType(fileData))
	w.Header().Set("Content-Length", fmt.Sprintf("%d", len(fileData)))
	w.Header().Set("Content-Disposition", fmt.Sprintf("filename=%q", filename))
	_, err = w.Write(fileData)
	if err != nil {
		log.Error("Problem while writing file").Request(r).Err(err).Log()
	}
}
