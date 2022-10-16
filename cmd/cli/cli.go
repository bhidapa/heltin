package main

//go:generate gen-func-wrappers

import (
	"context"
	"errors"
	"io"
	"os"
	"reflect"

	"github.com/bhidapa/heltin/cmd/cli/migratecmd"
	"github.com/bhidapa/heltin/pkg/postgres"
	"github.com/ungerik/go-structflag"

	"github.com/domonda/go-function"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/golog/log"
)

func main() {
	ctx := context.Background()

	// connect to database
	conn, err := postgres.NewConnection(ctx)
	if err != nil {
		panic(err)
	}
	db.SetConn(conn)

	// prepare cli dispatcher
	dispatcher := function.NewSuperStringArgsDispatcher()
	dispatcher.MustAddDefaultCommand("Prints the command line options.", structflagPrintUsage)
	structflag.PrintUsageIntro = func(output io.Writer) {
		dispatcher.PrintCommandsUsageIntro("heltin-cli", output)
	}

	// parse cli arguments
	flags := structflag.NewFlags()
	err = flags.Parse(os.Args[1:])
	if err != nil {
		panic(err)
	}

	// install commands
	migratecmd.AddCommands(dispatcher)

	// dispatch command
	cmd, subCmd, err := dispatcher.DispatchCombinedCommandAndArgs(ctx, flags.Args())
	if subCmd != "" {
		cmd += " " + subCmd
	}
	switch {
	case errors.Is(err, function.ErrCommandNotFound):
		log.Warnf("Command not found: %q\n\nAvailable commands:\n", cmd).Log()
		dispatcher.PrintCommands("heltin-cli")
		os.Exit(1)

	case errors.Is(err, context.Canceled):
		log.Warn("Command cancelled").Log()

	case err != nil:
		log.Warnf("Error while executing command %s: %+v\n", cmd, err).Log()
		os.Exit(2)
	}
}

// structflagPrintUsage wraps structflag.PrintUsage as function.Wrapper (generated code)
var structflagPrintUsage structflagPrintUsageT

// structflagPrintUsageT wraps structflag.PrintUsage as function.Wrapper (generated code)
type structflagPrintUsageT struct{}

func (structflagPrintUsageT) String() string {
	return "structflag.PrintUsage()"
}

func (structflagPrintUsageT) Name() string {
	return "PrintUsage"
}

func (structflagPrintUsageT) NumArgs() int      { return 0 }
func (structflagPrintUsageT) ContextArg() bool  { return false }
func (structflagPrintUsageT) NumResults() int   { return 0 }
func (structflagPrintUsageT) ErrorResult() bool { return false }

func (structflagPrintUsageT) ArgNames() []string {
	return []string(nil)
}

func (structflagPrintUsageT) ArgDescriptions() []string {
	return []string(nil)
}

func (structflagPrintUsageT) ArgTypes() []reflect.Type {
	return nil
}

func (structflagPrintUsageT) ResultTypes() []reflect.Type {
	return nil
}

func (f structflagPrintUsageT) Call(context.Context, []any) ([]any, error) {
	structflag.PrintUsage() // wrapped call
	return nil, nil
}

func (f structflagPrintUsageT) CallWithStrings(context.Context, ...string) ([]any, error) {
	structflag.PrintUsage() // wrapped call
	return nil, nil
}

func (f structflagPrintUsageT) CallWithNamedStrings(context.Context, map[string]string) ([]any, error) {
	structflag.PrintUsage() // wrapped call
	return nil, nil
}

func (f structflagPrintUsageT) CallWithJSON(context.Context, []byte) (results []any, err error) {
	structflag.PrintUsage() // wrapped call
	return nil, nil
}
