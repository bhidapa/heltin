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
	"github.com/ungerik/go-fs"
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

	var dbfile *fs.MemFile
	err = session.TransactionAsUserFromContext(ctx, func(ctx context.Context) error {
		var name string
		var data []byte
		err = db.Conn(ctx).QueryRow("select name, data from public.file where id = $1", fileID).Scan(&name, &data)
		if err != nil {
			return err
		}
		dbfile = fs.NewMemFile(name, data)
		return nil
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

	log.Info("Downloading file").
		Request(r).
		UUID("fileID", fileID).
		Str("fileName", dbfile.Name()).
		Int64("fileSize", dbfile.Size()).
		Log()

	w.Header().Set("Content-Type", http.DetectContentType(dbfile.FileData))
	w.Header().Set("Content-Length", fmt.Sprintf("%d", dbfile.Size()))
	w.Header().Set("Content-Disposition", fmt.Sprintf("filename=%q", dbfile.Name()))
	_, err = w.Write(dbfile.FileData)
	if err != nil {
		log.Error("Problem while writing file").Request(r).Err(err).Log()
	}
}
