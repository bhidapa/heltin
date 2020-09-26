package routes

import (
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func GraphQLProxy(router *mux.Router, endpoint string) error {
	from := "/api/graphql"
	to, err := url.Parse(endpoint)
	if err != nil {
		return err
	}

	toQuery := to.RawQuery
	proxy := &httputil.ReverseProxy{
		Director: func(req *http.Request) {
			req.URL.Scheme = to.Scheme
			req.URL.Host = to.Host
			req.Header.Set("X-Forwarded-Host", req.URL.Host)
			req.Header.Set("X-Forwarded-Proto", req.URL.Scheme)
			req.URL.Path = strings.Replace(singleJoiningSlash(to.Path, req.URL.Path), from, "", 1)
			if toQuery == "" || req.URL.RawQuery == "" {
				req.URL.RawQuery = toQuery + req.URL.RawQuery
			} else {
				req.URL.RawQuery = toQuery + "&" + req.URL.RawQuery
			}
			if _, ok := req.Header["User-Agent"]; !ok {
				// explicitly disable User-Agent so it's not set to default value
				req.Header.Set("User-Agent", "")
			}
		},
	}
	proxy.ErrorLog = log.ErrorWriter().StdLogger()

	router.Handle(from, handlers.ProxyHeaders(proxy))

	log.Debug("proxying graphql").
		Str("from", from).
		Str("to", endpoint).
		Log()
	return nil
}
