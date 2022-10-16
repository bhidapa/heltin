package migratecmd

import (
	"context"
	"reflect"
)

//go:generate gen-func-wrappers

// migratecmdDbFileDataToFs wraps dbFileDataToFs as function.Wrapper (generated code)
var migratecmdDbFileDataToFs migratecmdDbFileDataToFsT

// migratecmdDbFileDataToFsT wraps dbFileDataToFs as function.Wrapper (generated code)
type migratecmdDbFileDataToFsT struct{}

func (migratecmdDbFileDataToFsT) String() string {
	return "dbFileDataToFs(ctx context.Context)"
}

func (migratecmdDbFileDataToFsT) Name() string {
	return "dbFileDataToFs"
}

func (migratecmdDbFileDataToFsT) NumArgs() int      { return 1 }
func (migratecmdDbFileDataToFsT) ContextArg() bool  { return true }
func (migratecmdDbFileDataToFsT) NumResults() int   { return 0 }
func (migratecmdDbFileDataToFsT) ErrorResult() bool { return false }

func (migratecmdDbFileDataToFsT) ArgNames() []string {
	return []string{"ctx"}
}

func (migratecmdDbFileDataToFsT) ArgDescriptions() []string {
	return []string{""}
}

func (migratecmdDbFileDataToFsT) ArgTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*context.Context)(nil)).Elem(),
	}
}

func (migratecmdDbFileDataToFsT) ResultTypes() []reflect.Type {
	return nil
}

func (f migratecmdDbFileDataToFsT) Call(ctx context.Context, _ []any) ([]any, error) {
	dbFileDataToFs(ctx) // wrapped call
	return nil, nil
}

func (f migratecmdDbFileDataToFsT) CallWithStrings(ctx context.Context, _ ...string) ([]any, error) {
	dbFileDataToFs(ctx) // wrapped call
	return nil, nil
}

func (f migratecmdDbFileDataToFsT) CallWithNamedStrings(ctx context.Context, _ map[string]string) ([]any, error) {
	dbFileDataToFs(ctx) // wrapped call
	return nil, nil
}

func (f migratecmdDbFileDataToFsT) CallWithJSON(ctx context.Context, _ []byte) (results []any, err error) {
	dbFileDataToFs(ctx) // wrapped call
	return nil, nil
}
