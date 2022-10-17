package file

import (
	"context"

	"github.com/bhidapa/heltin/pkg/session"
	"github.com/domonda/go-errs"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-types/uu"
	"github.com/ungerik/go-fs"
)

func Delete(ctx context.Context, id uu.ID) (err error) {
	defer errs.WrapWithFuncParams(&err, ctx, id)

	return session.TransactionAsUserFromContext(ctx, func(ctx context.Context) error {
		var deleted bool
		err := db.Conn(ctx).QueryRow("delete from public.file where id = $1 returning true", id).Scan(&deleted)
		err = db.ReplaceErrNoRows(err, session.ErrForbidden)
		if err != nil {
			return err
		}
		if !deleted {
			// TODO: unnecessary because ErrNoRows
			return session.ErrForbidden
		}

		return deleteFromFS(ctx, id)
	})
}

func ForceDelete(ctx context.Context, id uu.ID) (err error) {
	defer errs.WrapWithFuncParams(&err, ctx, id)

	return db.Transaction(ctx, func(ctx context.Context) error {
		var deleted bool
		err := db.Conn(ctx).QueryRow("delete from public.file where id = $1 returning true", id).Scan(&deleted)
		if db.ReplaceErrNoRows(err, nil) != nil {
			return err
		}

		err = deleteFromFS(ctx, id)
		return ReplaceErrNotExists(err, nil)
	})
}

func deleteFromFS(ctx context.Context, id uu.ID) (err error) {
	defer errs.WrapWithFuncParams(&err, ctx, id)

	fsfile, err := FileFromID(ctx, id)
	if err != nil {
		return err
	}

	toRemove := fsfile.Dir()
	for {
		parentDir := toRemove.Dir()

		parentDirFiles, err := parentDir.ListDirMaxContext(ctx, 2)
		if err != nil {
			return err
		}
		if len(parentDirFiles) > 1 {
			// if the parent directory contains more files
			// we'll remove the current directory
			break
		}
		if config.Dir.Path() == parentDir.Path() {
			// if the parent directory is the root files directory
			// we'll remove the current directory
			break
		}

		// continue going up until dir contains multiple files
		toRemove = parentDir
	}

	// make sure there is ONLY ONE FILE within the directory to remove (ListDirRecursiveContext lists only files, skips directories)
	fileFound := false
	err = toRemove.ListDirRecursiveContext(ctx, func(f fs.File) error {
		if fileFound {
			return errs.New("multiple files exist under the dir to be removed")
		}
		fileFound = true
		return nil
	})
	if err != nil {
		return err
	}

	return toRemove.RemoveRecursiveContext(ctx)
}
