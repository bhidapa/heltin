package pdf

import (
	"fmt"
	"io"
	"net/http"

	"github.com/domonda/go-errs"
)

const (
	ErrGotenbergTimeout errs.Sentinel = "Gotenberg timeout"
)

type ErrGotenbergInternal string

func (err ErrGotenbergInternal) Error() string {
	return fmt.Sprintf("internal Gotenberg error: %s", string(err))
}

func responseErrorOrNil(response *http.Response) error {
	switch response.StatusCode {
	case http.StatusOK:
		return nil

	case http.StatusInternalServerError:
		responseBody, err := io.ReadAll(response.Body)
		if err != nil {
			return ErrGotenbergInternal(err.Error())
		}
		return ErrGotenbergInternal(string(responseBody))

	case http.StatusGatewayTimeout:
		return ErrGotenbergTimeout

	default:
		return errs.Errorf("Gotenberg error, status %d: %s", response.StatusCode, http.StatusText(response.StatusCode))
	}
}
