package pdf

import (
	"bytes"
	"context"
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

	MarginTop    int
	MarginBottom int
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
		marginTop.Write([]byte(fmt.Sprintf("%d", args.MarginTop)))
	}
	if args.MarginBottom > 0 {
		marginBottom, _ := writer.CreateFormField("marginBottom")
		marginBottom.Write([]byte(fmt.Sprintf("%d", args.MarginBottom)))
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
