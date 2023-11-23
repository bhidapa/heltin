package file

import (
	_ "embed"

	"github.com/bhidapa/heltin/internal/env"
	rootlog "github.com/domonda/golog/log"
	"github.com/ungerik/go-fs"
)

const (
	// MaxUploadSize is the max file size allowed to be uploaded
	MaxUploadSize int64 = 25 << 20 // 25 MB
)

var (
	log    = rootlog.NewPackageLogger("file")
	config struct {
		Dir fs.File `env:"FILE_DIR,required"`
	}
)

func init() {
	err := env.Parse(&config)
	if err != nil {
		panic(err)
	}

	if !config.Dir.Exists() {
		err = config.Dir.MakeAllDirs()
		if err != nil {
			panic(err)
		}
		log.Debug("Made directory").
			Str("dir", config.Dir.AbsPath()).
			Log()
	}

	log.Debug("Configured").
		StructFields(config).
		Log()
}
