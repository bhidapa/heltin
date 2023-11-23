package routes

import (
	"fmt"
	"mime"
	"net/http"
	"path"
	"strings"

	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx/httperr"
)

type SPA struct {
	dir       fs.File
	indexPath string
}

// NewSPA serves the provided directory as a Single-Page Application.
// Read more on how the app is actually served in `routes.SPA.ServeHTTP`.
func NewSPA(dir fs.File, indexPath string) SPA {
	return SPA{dir, indexPath}
}

// ServeHTTP inspects the URL path to locate a file within the static dir
// on the SPA handler. If a file is found, it will be served. If not, the
// file located at the index path on the SPA handler will be served. This
// is suitable behavior for serving an SPA (single page application).
// HTML, plaintext and JSON files will NEVER cache to guarantee an always up-to-date app.
// Will cache JS and CSS files forever since we assume their file names are/contain content hashes.
func (spa SPA) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	file := spa.dir.Join(path.Clean(r.URL.Path))
	if file.IsDir() ||
		!file.Exists() {
		file = spa.dir.Join(spa.indexPath)
	}

	reader, err := file.OpenReadSeeker()
	if err != nil {
		writeInternalServerError(err, r, w)
		return
	}
	defer reader.Close()

	ctype := mime.TypeByExtension(file.ExtLower())
	w.Header().Set("Cache-Type", ctype)

	switch {
	case strings.Contains(ctype, "text/plain"),
		strings.Contains(ctype, "text/html"),
		strings.Contains(ctype, "application/json"):
		// some files should never cache for up-to-date app guarantee
		w.Header().Set("Cache-Control", "no-store")
	case strings.Contains(ctype, "text/javascript"),
		strings.Contains(ctype, "text/css"):
		// cache JS/CSS forever since we assume their file names are/contain content hashes
		w.Header().Set("Cache-Control", "private, max-age=604800, immutable")
	default:
		// etag content hash for other files
		hash, err := file.ContentHashContext(r.Context())
		if err != nil {
			// probably canceled
			if r.Context().Err() == nil {
				writeInternalServerError(err, r, w)
			}
			return
		}
		// tell the browser to make conditional requests
		w.Header().Set("Cache-Control", "no-cache")
		w.Header().Set("ETag", `"`+hash+`"`)
	}

	w.Header().Set("Content-Length", fmt.Sprintf("%d", file.Size()))
	http.ServeContent(w, r, file.Name(), file.Modified(), reader)
}

func writeInternalServerError(err error, r *http.Request, w http.ResponseWriter) {
	log.Error("Internal error occurred").
		Ctx(r.Context()).
		Err(err).
		Log()
	httperr.WriteInternalServerError(err, w)
}
