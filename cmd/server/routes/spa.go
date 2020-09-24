package routes

import (
	"net/http"
	"path"

	"github.com/ungerik/go-fs"
)

type SPA struct {
	dir       fs.File
	indexPath string
}

func NewSPA(dir fs.File, indexPath string) *SPA {
	return &SPA{dir, indexPath}
}

// ServeHTTP inspects the URL path to locate a file within the static dir
// on the SPA handler. If a file is found, it will be served. If not, the
// file located at the index path on the SPA handler will be served. This
// is suitable behavior for serving an SPA (single page application).
func (spa SPA) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if !spa.dir.Join(path.Clean(r.URL.Path)).Exists() {
		http.ServeFile(w, r, spa.dir.Join(spa.indexPath).Path())
		return
	}
	http.FileServer(http.Dir(spa.dir.Path())).ServeHTTP(w, r)
}
