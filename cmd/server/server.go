package main

import (
	"crypto/tls"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/bhidapa/heltin/cmd/server/routes"
	"github.com/caarlos0/env"
	"github.com/domonda/golog/log"
	"github.com/gorilla/mux"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx"
	"golang.org/x/crypto/acme/autocert"
)

var config struct {
	Port           int      `env:"PORT"`
	AppDomains     []string `env:"APP_DOMAINS"`
	TLS            bool     `env:"TLS"`
	CertDir        fs.File  `env:"CERT_DIR"`
	CertEmail      string   `env:"CERT_EMAIL"`
	AppDir         fs.File  `env:"APP_DIR,required"`
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

	log.Debug("configurated").
		Any("config", config).
		Log()

	router := mux.NewRouter().StrictSlash(true)

	err = routes.GraphQLProxy(router, config.GraphQLEndoint)
	if err != nil {
		log.Fatal("error during graphql proxy setup").
			Err(err).
			LogAndPanic()
	}

	routes.App(router, config.AppDir, "/", "index.html")

	router.Use(log.HTTPMiddlewareFunc(log.Levels.Debug, "HTTP request", "Referer"))

	server := &http.Server{
		Addr:     fmt.Sprintf(":%d", config.Port),
		Handler:  router,
		ErrorLog: log.ErrorWriter().StdLogger(),
	}

	httpx.GracefulShutdownServerOnSignal(server, nil, log.ErrorWriter(), time.Minute)

	if config.TLS {
		certManager := autocert.Manager{
			Email:      config.CertEmail,
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
					LogAndPanic()
			}
		}()

		log.Info("TLS listening").
			Log()
		server.TLSConfig = &tls.Config{GetCertificate: certManager.GetCertificate}
		err = server.ListenAndServeTLS("", "")
	} else {
		log.Info("listening").
			Log()
		err = server.ListenAndServe()
	}

	if err == nil || errors.Is(err, http.ErrServerClosed) {
		log.Info("shutting down").
			Log()
	} else {
		log.Fatal("server error").
			Err(err).
			LogAndPanic()
	}
}
