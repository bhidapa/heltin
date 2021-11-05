package main

import (
	"crypto/tls"
	"errors"
	"fmt"
	"net"
	"net/http"
	"time"

	"github.com/bhidapa/heltin/cmd/server/routes"
	"github.com/bhidapa/heltin/pkg/env"
	"github.com/domonda/golog/log"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx"
	"golang.org/x/crypto/acme/autocert"
)

var config struct {
	Port           int      `env:"SERVER_PORT"`
	AppDomains     []string `env:"APP_DOMAINS"`
	AllowedOrigins []string `env:"ALLOWED_ORIGINS"`
	TLS            bool     `env:"TLS"`
	CertDir        fs.File  `env:"CERT_DIR"`
	AppDir         fs.File  `env:"APP_DIR"`
	GraphQLEndoint string   `env:"GRAPHQL_ENDPOINT,required"`
}

func main() {
	err := env.Parse(&config)
	if err != nil {
		panic(err)
	}

	if config.Port == 0 {
		if config.TLS {
			config.Port = 443
		} else {
			config.Port = 80
		}
	}

	log.Logger = log.Logger.WithPrefix("server: ")

	log.Debug("Configurated").
		StructFields(config).
		Log()

	router := mux.NewRouter().StrictSlash(true)
	router.Use(log.HTTPMiddlewareFunc(log.Levels.Debug, "HTTP request"))
	router.Use(SecHeaders)

	err = routes.GraphQLProxy(router, config.GraphQLEndoint)
	if err != nil {
		log.Fatal("error during graphql proxy setup").
			Err(err).
			LogAndPanic()
	}

	if config.AppDir != "" {
		routes.App(router, config.AppDir, "/", "index.html")
	} else {
		log.Warn("Web dir not specified, skipping SPA setup").Log()
	}

	var handler http.Handler = router
	if len(config.AllowedOrigins) > 0 {
		allowedMethods := []string{"GET", "POST"}
		allowedHeaders := []string{"Authorization", "X-Request-ID", "X-Correlation-ID"}
		exposedHeaders := []string{"X-Request-ID", "X-Correlation-ID"}
		handler = handlers.CORS(
			handlers.AllowedOrigins(config.AllowedOrigins),
			handlers.AllowedMethods(allowedMethods),
			handlers.AllowedHeaders(allowedHeaders),
			handlers.ExposedHeaders(exposedHeaders),
		)(router)

		log.Info("CORS enabled because allowed origins are configured").
			Strs("allowedOrigins", config.AllowedOrigins).
			Strs("allowedMethods", allowedMethods).
			Strs("allowedHeaders", allowedHeaders).
			Strs("exposedHeaders", exposedHeaders).
			Log()
	}

	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", config.Port),
		Handler:      handler,
		ErrorLog:     log.ErrorWriter().StdLogger(),
		IdleTimeout:  60 * time.Second,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	httpx.GracefulShutdownServerOnSignal(server, nil, log.ErrorWriter(), time.Minute)

	listener, err := net.Listen("tcp", server.Addr)
	if err != nil {
		panic(err)
	}

	if config.TLS {
		certManager := autocert.Manager{
			Email:      "dev@heltin.app",
			Prompt:     autocert.AcceptTOS,
			HostPolicy: autocert.HostWhitelist(config.AppDomains...),
			Cache:      autocert.DirCache(config.CertDir),
		}

		go func() {
			log.Info("autocert manager listening").
				Uint16("port", 80).
				Log()

			err := http.ListenAndServe(
				":80",
				// redirect to https
				certManager.HTTPHandler(http.HandlerFunc((func(w http.ResponseWriter, req *http.Request) {
					target := "https://" + req.Host + req.URL.Path
					if len(req.URL.RawQuery) > 0 {
						target += "?" + req.URL.RawQuery + req.URL.Fragment
					}
					http.Redirect(w, req, target, http.StatusPermanentRedirect)
				}))),
			)
			if err != nil && !errors.Is(err, http.ErrServerClosed) {
				log.Error("autocert manager server error").
					Err(err).
					Log()
			}
		}()

		server.TLSConfig = &tls.Config{GetCertificate: certManager.GetCertificate, MinVersion: tls.VersionTLS12}
		log.Info("TLS listening").
			Log()
		err = server.ServeTLS(listener, "", "")
	} else {
		log.Info("Listening").
			Log()
		err = server.Serve(listener)
	}

	if err == nil || errors.Is(err, http.ErrServerClosed) {
		log.Info("Shutting down gracefully").
			Log()
	} else {
		log.Fatal("Server error").
			Err(err).
			LogAndPanic()
	}
}

// SecHeaders injects security headers to every response.
// Read more: https://gist.github.com/mikesamuel/f7c7caed42413396e4d3e61dae6f5712.
func SecHeaders(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Specifies interactions between frames and affects click-jacking.
		w.Header().Set("X-Frame-Options", "DENY")

		// Affects leakage of sensitive information via URL parameters included in the referrer header.
		w.Header().Set("Referrer-Policy", "no-referrer")

		// Addresses leakage of sensitive information and MITM attacks via HTTPS->HTTP downgrade attacks.
		if r.TLS != nil {
			w.Header().Set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
		}

		// Addresses polyglot attacks by forbidding content-type sniffing.
		w.Header().Set("X-Content-Type-Options", "nosniff")

		h.ServeHTTP(w, r)
	})
}
