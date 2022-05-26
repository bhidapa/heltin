//go:generate gen-func-wrappers $GOFILE
package routes

import (
	"context"
	"encoding/json"
	"reflect"

	"github.com/bhidapa/heltin/pkg/reports"

	"github.com/domonda/go-function"
	"github.com/domonda/go-types/uu"
)

// reportsCreateForConclusion wraps reports.CreateForConclusion as function.Wrapper (generated code)
var reportsCreateForConclusion reportsCreateForConclusionT

// reportsCreateForConclusionT wraps reports.CreateForConclusion as function.Wrapper (generated code)
type reportsCreateForConclusionT struct{}

func (reportsCreateForConclusionT) String() string {
	return "reports.CreateForConclusion(ctx context.Context, conclusionID uu.ID) (fileID uu.ID, err error)"
}

func (reportsCreateForConclusionT) Name() string {
	return "CreateForConclusion"
}

func (reportsCreateForConclusionT) NumArgs() int      { return 2 }
func (reportsCreateForConclusionT) ContextArg() bool  { return true }
func (reportsCreateForConclusionT) NumResults() int   { return 2 }
func (reportsCreateForConclusionT) ErrorResult() bool { return true }

func (reportsCreateForConclusionT) ArgNames() []string {
	return []string{"ctx", "conclusionID"}
}

func (reportsCreateForConclusionT) ArgDescriptions() []string {
	return []string{"", ""}
}

func (reportsCreateForConclusionT) ArgTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*context.Context)(nil)).Elem(),
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
	}
}

func (reportsCreateForConclusionT) ResultTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
		reflect.TypeOf((*error)(nil)).Elem(),
	}
}

func (f reportsCreateForConclusionT) Call(ctx context.Context, args []interface{}) (results []interface{}, err error) {
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForConclusion(ctx, args[0].(uu.ID)) // wrapped call
	return results, err
}

func (f reportsCreateForConclusionT) CallWithStrings(ctx context.Context, strs ...string) (results []interface{}, err error) {
	var a struct {
		conclusionID uu.ID
	}
	if 0 < len(strs) {
		err := function.ScanString(strs[0], &a.conclusionID)
		if err != nil {
			return nil, function.NewErrParseArgString(err, f, "conclusionID")
		}
	}
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForConclusion(ctx, a.conclusionID) // wrapped call
	return results, err
}

func (f reportsCreateForConclusionT) CallWithNamedStrings(ctx context.Context, strs map[string]string) (results []interface{}, err error) {
	var a struct {
		conclusionID uu.ID
	}
	if str, ok := strs["conclusionID"]; ok {
		err := function.ScanString(str, &a.conclusionID)
		if err != nil {
			return nil, function.NewErrParseArgString(err, f, "conclusionID")
		}
	}
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForConclusion(ctx, a.conclusionID) // wrapped call
	return results, err
}

func (f reportsCreateForConclusionT) CallWithJSON(ctx context.Context, argsJSON []byte) (results []interface{}, err error) {
	var a struct {
		ConclusionID uu.ID
	}
	err = json.Unmarshal(argsJSON, &a)
	if err != nil {
		return nil, function.NewErrParseArgsJSON(err, f, argsJSON)
	}
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForConclusion(ctx, a.ConclusionID) // wrapped call
	return results, err
}

// reportsCreateForTreatment wraps reports.CreateForTreatment as function.Wrapper (generated code)
var reportsCreateForTreatment reportsCreateForTreatmentT

// reportsCreateForTreatmentT wraps reports.CreateForTreatment as function.Wrapper (generated code)
type reportsCreateForTreatmentT struct{}

func (reportsCreateForTreatmentT) String() string {
	return "reports.CreateForTreatment(ctx context.Context, treatmentID uu.ID) (fileID uu.ID, err error)"
}

func (reportsCreateForTreatmentT) Name() string {
	return "CreateForTreatment"
}

func (reportsCreateForTreatmentT) NumArgs() int      { return 2 }
func (reportsCreateForTreatmentT) ContextArg() bool  { return true }
func (reportsCreateForTreatmentT) NumResults() int   { return 2 }
func (reportsCreateForTreatmentT) ErrorResult() bool { return true }

func (reportsCreateForTreatmentT) ArgNames() []string {
	return []string{"ctx", "treatmentID"}
}

func (reportsCreateForTreatmentT) ArgDescriptions() []string {
	return []string{"", ""}
}

func (reportsCreateForTreatmentT) ArgTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*context.Context)(nil)).Elem(),
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
	}
}

func (reportsCreateForTreatmentT) ResultTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
		reflect.TypeOf((*error)(nil)).Elem(),
	}
}

func (f reportsCreateForTreatmentT) Call(ctx context.Context, args []interface{}) (results []interface{}, err error) {
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForTreatment(ctx, args[0].(uu.ID)) // wrapped call
	return results, err
}

func (f reportsCreateForTreatmentT) CallWithStrings(ctx context.Context, strs ...string) (results []interface{}, err error) {
	var a struct {
		treatmentID uu.ID
	}
	if 0 < len(strs) {
		err := function.ScanString(strs[0], &a.treatmentID)
		if err != nil {
			return nil, function.NewErrParseArgString(err, f, "treatmentID")
		}
	}
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForTreatment(ctx, a.treatmentID) // wrapped call
	return results, err
}

func (f reportsCreateForTreatmentT) CallWithNamedStrings(ctx context.Context, strs map[string]string) (results []interface{}, err error) {
	var a struct {
		treatmentID uu.ID
	}
	if str, ok := strs["treatmentID"]; ok {
		err := function.ScanString(str, &a.treatmentID)
		if err != nil {
			return nil, function.NewErrParseArgString(err, f, "treatmentID")
		}
	}
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForTreatment(ctx, a.treatmentID) // wrapped call
	return results, err
}

func (f reportsCreateForTreatmentT) CallWithJSON(ctx context.Context, argsJSON []byte) (results []interface{}, err error) {
	var a struct {
		TreatmentID uu.ID
	}
	err = json.Unmarshal(argsJSON, &a)
	if err != nil {
		return nil, function.NewErrParseArgsJSON(err, f, argsJSON)
	}
	results = make([]interface{}, 1)
	results[0], err = reports.CreateForTreatment(ctx, a.TreatmentID) // wrapped call
	return results, err
}
