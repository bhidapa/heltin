package session

import (
	"errors"
	"strings"

	"github.com/domonda/go-errs"
)

const ErrForbidden = errs.Sentinel("forbidden")

// CheckForbidden checks if the error is the internal Postgres
// database row-level security policy violation exception or a
// permission denied exception due to insufficient grants and
// returns ErrForbidden.
//
// If the error is not a Postgres forbidden error, the passed
// error will be returned instead.
func CheckForbidden(err error) error {
	if err == nil {
		return nil
	}

	const (
		rlsViolationMsg     = "pq: new row violates row-level security policy" // when the RLS policy is violated
		permissionDeniedMsg = "pq: permission denied"                          // when the role doesnt have sufficient grants
	)
	msg := err.Error()
	if strings.Contains(msg, rlsViolationMsg) || strings.Contains(msg, permissionDeniedMsg) {
		return ErrForbidden
	}

	return err
}

// IsOtherThanErrForbidden returns true if the error
// is present and is not ErrForbidden.
func IsOtherThanErrForbidden(err error) bool {
	return err != nil && !errors.Is(err, ErrForbidden)
}
