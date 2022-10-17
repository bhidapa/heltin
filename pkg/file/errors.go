package file

import (
	"errors"

	"github.com/domonda/go-errs"
)

const ErrNotExist = errs.Sentinel("file does not exist")

func ReplaceErrNotExists(err error, replacement error) error {
	if errors.Is(err, ErrNotExist) {
		return replacement
	}
	return err
}
