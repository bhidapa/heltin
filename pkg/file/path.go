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

func WriteAllFileData(ctx context.Context, id uu.ID, ext string, data []byte) (fsfile fs.File, err error) {
	defer errs.WrapWithFuncParams(&err, ctx, id, ext, data)

	if ext == "" {
		return "", errors.New("file extension must exist")
	}
	if !strings.HasPrefix(ext, ".") {
		return "", errors.New("file extension must begin with a dot (.)")
	}

	dir := IDToDir(id)
	err = dir.MakeAllDirs()
	if err != nil {
		return "", err
	}

	fsfile = dir.Join(strings.Replace(fileDataPattern, ".*", strings.ToLower(ext), 1))
	err = fsfile.WriteAll(ctx, data)
	if err != nil {
		return "", err
	}

	return fsfile, nil
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
	if err != nil {
		return "", err
	}

	err = fsfile.CheckExists()
	if err != nil {
		return "", ErrNotExist
	}

	return fsfile, nil
}
