package file

import (
	"context"
	"errors"
	"fmt"
	"strings"

	"github.com/domonda/go-errs"
	"github.com/domonda/go-types/uu"
	"github.com/ungerik/go-fs"
	"github.com/ungerik/go-fs/uuiddir"
)

const fileDataPattern = "data.*"

func IDToDir(id uu.ID) fs.File {
	return config.Dir.Join(uuiddir.Split(id)...)
}

func FileFromID(ctx context.Context, id uu.ID) (fsfile fs.File, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, id)

	dir := IDToDir(id)

	err = dir.ListDirContext(ctx, func(f fs.File) error {
		if fsfile != "" {
			return fmt.Errorf("found multiple files matching pattern %q", fileDataPattern)
		}
		fsfile = f
		return nil
	}, fileDataPattern)
	if fs.RemoveErrDoesNotExist(err) != nil {
		return "", err
	}

	err = fsfile.CheckExists()
	if err != nil {
		return "", ErrNotExist
	}

	return fsfile, nil
}

// Write stores the file on the filesystem.
func Write(ctx context.Context, id uu.ID, file fs.FileReader) (fsfile fs.File, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, id, file)

	ext := file.Ext()
	if ext == "" {
		return "", errors.New("file extension must exist")
	}

	dir := IDToDir(id)
	err = dir.MakeAllDirs()
	if err != nil {
		return "", err
	}

	fsfile = dir.Join(strings.Replace(fileDataPattern, ".*", strings.ToLower(ext), 1))

	w, err := fsfile.OpenWriter()
	if err != nil {
		return "", err
	}

	_, err = file.WriteTo(w)
	if err != nil {
		return "", err
	}

	return "", nil
}
