package migratecmd

import (
	"context"

	"github.com/bhidapa/heltin/pkg/file"
	"github.com/bhidapa/heltin/pkg/postgres"
	"github.com/domonda/go-function"
	"github.com/domonda/go-types/uu"
	"github.com/domonda/golog/log"
	"github.com/ungerik/go-fs"
)

func AddCommands(dispatcher *function.SuperStringArgsDispatcher) {
	migrateCmd := dispatcher.MustAddSuperCommand("migrate")

	migrateCmd.MustAddCommand("dbFileDataToFs", "Moves files from database tables to the filesystem.", migratecmdDbFileDataToFs)
}

func dbFileDataToFs(ctx context.Context) {
	log := log.WithCtx(ctx)

	conn, err := postgres.NewConnection(ctx)
	if err != nil {
		panic(err)
	}

	type File struct {
		ID   uu.ID  `db:"id"`
		Name string `db:"name"`
		Data []byte `db:"data"`
	}
	var files []*File
	err = conn.QueryRows("select id, name, data from public.file").ScanStructSlice(&files)
	if err != nil {
		panic(err)
	}

	for i, dbfile := range files {
		memFile := fs.NewMemFile(dbfile.Name, dbfile.Data)
		hash, err := memFile.ContentHash()
		if err != nil {
			panic(err)
		}

		err = conn.Exec("update public.file set hash=$1 where id = $2", hash, dbfile.ID)
		if err != nil {
			panic(err)
		}

		fsfile, err := file.WriteAllFileData(ctx, dbfile.ID, memFile.Ext(), memFile.FileData)
		if err != nil {
			panic(err)
		}

		log.Info("Wrote").
			UUID("fileID", dbfile.ID).
			Str("fileName", dbfile.Name).
			Str("path", fsfile.Path()).
			Int("remaining", len(files)-(i+1)).
			Log()
	}
}
