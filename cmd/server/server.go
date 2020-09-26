package main

import (
	"crypto/tls"
	"errors"
	"fmt"
	"net/http"
	"path"
	"path/filepath"
	"runtime"
	"time"

	"github.com/bhidapa/heltin/cmd/server/routes"
	"github.com/caarlos0/env"
	"github.com/domonda/golog/log"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-httpx"
	"golang.org/x/crypto/acme/autocert"
)

var config struct {
	Port           int      `env:"SERVER_PORT"`
	AppDomains     []string `env:"APP_DOMAINS"`
	TLS            bool     `env:"TLS"`
	CertDir        fs.File  `env:"CERT_DIR"`
	CertEmail      string   `env:"CERT_EMAIL"`
	AppDir         fs.File  `env:"APP_DIR"`
	GraphQLEndoint string   `env:"GRAPHQL_ENDPOINT,required"`
}

func main() {
	// injects the .env file env variables from the root of the repository
	// does NOT override existing/already defined environment variables
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		return
	}

	path := filepath.Join(path.Dir(filename), "..", "..", ".env")
	if !fs.File(path).Exists() {
		return
	}

	if path == "" {
		log.Debug("dotenv not found").Log()
		return
	}

	err := godotenv.Load(path)
	if err != nil {
		panic(err)
	}

	log.Debug("dotenv loaded").
		Str("path", path).
		Log()

	err = env.Parse(&config)
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

	if config.AppDir != "" {
		routes.App(router, config.AppDir, "/", "index.html")
	} else {
		log.Warn("app dir not specified, skipping SPA setup").Log()
	}

	router.Use(log.HTTPMiddlewareFunc(log.Levels.Debug, "HTTP request", "Referer"))

	var allowedOrigins []string
	if len(config.AppDomains) == 0 {
		allowedOrigins = []string{"*"}
	} else {
		allowedOrigins = config.AppDomains
	}

	server := &http.Server{
		Addr:     fmt.Sprintf(":%d", config.Port),
		Handler:  handlers.CORS(handlers.AllowedOrigins(allowedOrigins))(router),
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
