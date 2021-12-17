package file

import (
	_ "embed"

	rootlog "github.com/domonda/golog/log"
)

var log = rootlog.NewPackageLogger("file")
