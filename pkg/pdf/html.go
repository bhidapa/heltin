package pdf

import (
	"context"
	"io"

	"github.com/domonda/go-errs"
	"github.com/thecodingmachine/gotenberg-go-client/v7"
)

func RenderHTML(ctx context.Context, pageHTML, headerHTML, footerHTML []byte) (pdf []byte, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, pageHTML, headerHTML, footerHTML)

	log.Info("Rendering HTML to PDF").Ctx(ctx).Log()

	index, err := gotenberg.NewDocumentFromBytes("index.html", pageHTML)
	if err != nil {
		return nil, err
	}
	request := gotenberg.NewHTMLRequest(index)

	request.PaperSize([2]float64{8.27, 11.7}) // A4
	request.Landscape(false)
	request.Scale(1)

	if len(headerHTML) > 0 {
		header, err := gotenberg.NewDocumentFromBytes("header.html", headerHTML)
		if err != nil {
			return nil, err
		}
		request.Header(header)
	}

	if len(footerHTML) > 0 {
		footer, err := gotenberg.NewDocumentFromBytes("footer.html", footerHTML)
		if err != nil {
			return nil, err
		}
		request.Footer(footer)
	}

	response, err := gotenbergClient.PostContext(ctx, request)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()

	err = responseErrorOrNil(response)
	if err != nil {
		return nil, err
	}

	return io.ReadAll(response.Body)
}
