package env

import (
	"path"
	"runtime"

	goenv "github.com/caarlos0/env/v6"
	"github.com/joho/godotenv"
	"github.com/ungerik/go-fs"
)

// injects the .env file env variables from the root of the repository
// does NOT override existing/already defined environment variables
func init() {
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		return
	}

	dotenv := fs.File(path.Dir(filename)).Join("..", "..", ".env")
	if !dotenv.Exists() {
		return
	}

	err := godotenv.Load(dotenv.AbsPath())
	if err != nil {
		panic(err)
	}

	log.Debug("dotenv loaded").
		Str("dotenv", dotenv.AbsPath()).
		Log()
}

func Parse(v interface{}) error {
	return goenv.Parse(v)
}
