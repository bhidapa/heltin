package session

import (
	"github.com/bhidapa/heltin/pkg/env"
	rootlog "github.com/domonda/golog/log"
)

var (
	log    = rootlog.NewPackageLogger("session")
	config struct {
		Secret string `env:"SESSION_SECRET,required"`
		Secure bool   `env:"SESSION_SECURE"`
	}
)

const cookieName = "heltin.sid" // synchronised with cmd/graphql/index.ts

func init() {
	err := env.Parse(&config)
	if err != nil {
		panic(err)
	}

	password := config.Secret
	config.Secret = "<omitted>"

	log.Debug("Configured").
		StructFields(config).
		Log()

	config.Secret = password
}
