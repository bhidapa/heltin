package reports

import (
	_ "embed"

	rootlog "github.com/domonda/golog/log"
)

var log = rootlog.NewPackageLogger("reports")

//go:embed definitions.html
var definitions []byte
