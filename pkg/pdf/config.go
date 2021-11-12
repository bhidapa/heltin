package pdf

import (
	"fmt"

	"github.com/bhidapa/heltin/pkg/env"
	rootlog "github.com/domonda/golog/log"
	"github.com/thecodingmachine/gotenberg-go-client/v7"
)

var (
	log = rootlog.NewPackageLogger("pdf")

	config struct {
		GotenbergHost string `env:"GOTENBERG_HOST,required"`
		GotenbergPort uint16 `env:"GOTENBERG_PORT,required"`
	}

	gotenbergClient *gotenberg.Client
)

func init() {
	err := env.Parse(&config)
	if err != nil {
		panic(err)
	}

	gotenbergClient = &gotenberg.Client{
		Hostname: fmt.Sprintf("http://%s:%d", config.GotenbergHost, config.GotenbergPort),
	}

	log.Debug("Configured").
		StructFields(config).
		Log()
}
