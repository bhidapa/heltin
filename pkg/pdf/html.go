package pdf

import (
	"bytes"
	"context"
	"encoding/base64"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"

	"github.com/domonda/go-errs"
)

type RenderHTMLArgs struct {
	HeaderHTML []byte
	FooterHTML []byte
	IndexHTML  []byte

	MarginTop    float64
	MarginRight  float64
	MarginBottom float64
	MarginLeft   float64
}

func RenderHTML(ctx context.Context, args *RenderHTMLArgs) (pdf []byte, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, args)

	log.Info("Rendering HTML to PDF").Ctx(ctx).Log()

	body := &bytes.Buffer{}

	writer := multipart.NewWriter(body)

	index, _ := writer.CreateFormFile("files", "index.html")
	index.Write(args.IndexHTML)

	if len(args.HeaderHTML) > 0 {
		header, _ := writer.CreateFormFile("files", "header.html")
		header.Write(args.HeaderHTML)
	}
	if len(args.FooterHTML) > 0 {
		footer, _ := writer.CreateFormFile("files", "footer.html")
		footer.Write(args.FooterHTML)
	}

	if args.MarginTop > 0 {
		marginTop, _ := writer.CreateFormField("marginTop")
		marginTop.Write([]byte(fmt.Sprintf("%.2f", args.MarginTop)))
	}
	if args.MarginRight > 0 {
		marginRight, _ := writer.CreateFormField("marginRight")
		marginRight.Write([]byte(fmt.Sprintf("%.2f", args.MarginRight)))
	}
	if args.MarginBottom > 0 {
		marginBottom, _ := writer.CreateFormField("marginBottom")
		marginBottom.Write([]byte(fmt.Sprintf("%.2f", args.MarginBottom)))
	}
	if args.MarginLeft > 0 {
		marginLeft, _ := writer.CreateFormField("marginLeft")
		marginLeft.Write([]byte(fmt.Sprintf("%.2f", args.MarginLeft)))
	}

	writer.Close()

	req, err := http.NewRequestWithContext(ctx, "POST", gotenbergURL+"/forms/chromium/convert/html", body)
	if err != nil {
		return nil, err
	}
	req.Header.Add("Content-Type", writer.FormDataContentType())

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}

	err = responseErrorOrNil(res)
	if err != nil {
		return nil, err
	}

	return io.ReadAll(res.Body)
}

// ToBase64Encoding encodes the file in base64 ready to be used in HTML tags.
func ToBase64Encoding(file []byte) string {
	var base64Encoding string

	switch http.DetectContentType(file) {
	case "image/jpeg":
		base64Encoding += "data:image/jpeg;base64,"
	case "image/png":
		base64Encoding += "data:image/png;base64,"
	}

	base64Encoding += base64.StdEncoding.EncodeToString(file)
	return base64Encoding
}
