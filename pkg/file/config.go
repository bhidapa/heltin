package file

import (
	_ "embed"

	rootlog "github.com/domonda/golog/log"
)

const (
	// MaxUploadSize is the max file size allowed to be uploaded
	MaxUploadSize int64 = 25 << 20 // 25 MB
)

var log = rootlog.NewPackageLogger("file")
