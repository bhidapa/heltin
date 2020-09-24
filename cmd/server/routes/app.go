package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/ungerik/go-fs"
)

func App(router *mux.Router, dir fs.File, pathPrefix, indexPath string) {
	router.PathPrefix(pathPrefix).Handler(http.StripPrefix(pathPrefix, NewSPA(dir, indexPath)))
	log.Debug("spa app configured").
		Str("dir", dir.Path()).
		Str("pathPrefix", pathPrefix).
		Str("indexPath", indexPath).
		Log()
}
