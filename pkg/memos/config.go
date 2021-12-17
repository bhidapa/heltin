package memos

import (
	_ "embed"

	rootlog "github.com/domonda/golog/log"
)

var log = rootlog.NewPackageLogger("memos")

//go:embed templates/definitions.html
var definitions []byte

//go:embed templates/header.html
var headerHtml []byte

//go:embed templates/footer.html
var footerHtml []byte

//go:embed assets/bhidapa-logo.png
var bhidapaLogo []byte

//go:embed assets/djecija-dusa-treba-da-se-slusa.png
var djecijaDusaTrebaDaSeSlusaPng []byte

//go:embed assets/zastita-zdravlja.png
var zastitaZdravljaPng []byte
