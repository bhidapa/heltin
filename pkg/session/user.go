package session

import (
	"context"
	"database/sql"
	"errors"
	"fmt"

	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/uu"
)

type userCtxKeyType struct{}

var userCtxKey userCtxKeyType

func ContextWithUser(ctx context.Context, userID uu.ID) context.Context {
	return context.WithValue(ctx, userCtxKey, userID)
}

func UserFromContext(ctx context.Context) (userID uu.ID, err error) {
	userIDVal := ctx.Value(userCtxKey)
	userID = uu.IDFrom(userIDVal)
	if userID == uu.IDNil {
		return uu.IDNil, errors.New("user not in context")
	}
	return userID, nil
}

func TransactionAsUser(ctx context.Context, txFunc func(ctx context.Context) error) (err error) {
	return db.Transaction(ctx, func(ctx context.Context) (err error) {
		userID, err := UserFromContext(ctx)
		if err != nil {
			return err
		}

		// impersonate user in transaction
		err = db.Conn(ctx).Exec(fmt.Sprintf("set local session.user_id to '%s'; set role viewer;", userID))
		if err != nil {
			return err
		}
		defer func() {
			if !errors.Is(err, sql.ErrTxDone) {
				// for when this transaction is within another one
				e := db.Conn(ctx).Exec("reset session.user_id; reset role;")
				err = errs.Combine(err, e)
			}
		}()

		return txFunc(ctx)
	})
}
