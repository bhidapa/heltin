package memos

import (
	_ "embed"

	rootlog "github.com/domonda/golog/log"
)

var log = rootlog.NewPackageLogger("memos")

//go:embed templates/definitions.html
var definitions []byte
