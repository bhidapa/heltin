package file

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"net/http"

	"github.com/bhidapa/heltin/pkg/session"
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

	var dbfile *fs.MemFile
	err = session.TransactionAsUser(ctx, func(ctx context.Context) error {
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
		httperr.New(http.StatusBadRequest, err.Error()).ServeHTTP(w, r)
		return
	}

	w.Header().Set("Content-Type", http.DetectContentType(dbfile.FileData))
	w.Header().Set("Content-Length", fmt.Sprintf("%d", dbfile.Size()))
	w.Header().Set("Content-Disposition", fmt.Sprintf("filename=%q", dbfile.Name()))
	_, err = w.Write(dbfile.FileData)
	if err != nil {
		log.Error("Problem while writing file").Err(err).Log()
	}
}
