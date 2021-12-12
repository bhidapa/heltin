package pdf

import (
	"fmt"

	"github.com/bhidapa/heltin/pkg/env"
	rootlog "github.com/domonda/golog/log"
)

var (
	log = rootlog.NewPackageLogger("pdf")

	config struct {
		GotenbergHost string `env:"GOTENBERG_HOST,required"`
		GotenbergPort uint16 `env:"GOTENBERG_PORT,required"`
	}

	gotenbergURL string
)

func init() {
	err := env.Parse(&config)
	if err != nil {
		panic(err)
	}

	gotenbergURL = fmt.Sprintf("http://%s:%d", config.GotenbergHost, config.GotenbergPort)

	log.Debug("Configured").
		StructFields(config).
		Str("gotenbergURL", gotenbergURL).
		Log()
}
