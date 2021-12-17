//go:generate gen-func-wrappers $GOFILE
package routes

import (
	"context"
	"encoding/json"
	"reflect"

	"github.com/bhidapa/heltin/pkg/memos"

	"github.com/domonda/go-function"
	"github.com/domonda/go-types/uu"
)

// memosCreateForConclusion wraps memos.CreateForConclusion as function.Wrapper (generated code)
var memosCreateForConclusion memosCreateForConclusionT

// memosCreateForConclusionT wraps memos.CreateForConclusion as function.Wrapper (generated code)
type memosCreateForConclusionT struct{}

func (memosCreateForConclusionT) String() string {
	return "memos.CreateForConclusion(ctx context.Context, conclusionID uu.ID) (fileID uu.ID, err error)"
}

func (memosCreateForConclusionT) Name() string {
	return "CreateForConclusion"
}

func (memosCreateForConclusionT) NumArgs() int      { return 2 }
func (memosCreateForConclusionT) ContextArg() bool  { return true }
func (memosCreateForConclusionT) NumResults() int   { return 2 }
func (memosCreateForConclusionT) ErrorResult() bool { return true }

func (memosCreateForConclusionT) ArgNames() []string {
	return []string{"ctx", "conclusionID"}
}

func (memosCreateForConclusionT) ArgDescriptions() []string {
	return []string{"", ""}
}

func (memosCreateForConclusionT) ArgTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*context.Context)(nil)).Elem(),
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
	}
}

func (memosCreateForConclusionT) ResultTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
		reflect.TypeOf((*error)(nil)).Elem(),
	}
}

func (f memosCreateForConclusionT) Call(ctx context.Context, args []interface{}) (results []interface{}, err error) {
	results = make([]interface{}, 1)
	results[0], err = memos.CreateForConclusion(ctx, args[0].(uu.ID)) // wrapped call
	return results, err
}

func (f memosCreateForConclusionT) CallWithStrings(ctx context.Context, strs ...string) (results []interface{}, err error) {
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
	results[0], err = memos.CreateForConclusion(ctx, a.conclusionID) // wrapped call
	return results, err
}

func (f memosCreateForConclusionT) CallWithNamedStrings(ctx context.Context, strs map[string]string) (results []interface{}, err error) {
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
	results[0], err = memos.CreateForConclusion(ctx, a.conclusionID) // wrapped call
	return results, err
}

func (f memosCreateForConclusionT) CallWithJSON(ctx context.Context, argsJSON []byte) (results []interface{}, err error) {
	var a struct {
		ConclusionID uu.ID
	}
	err = json.Unmarshal(argsJSON, &a)
	if err != nil {
		return nil, function.NewErrParseArgsJSON(err, f, argsJSON)
	}
	results = make([]interface{}, 1)
	results[0], err = memos.CreateForConclusion(ctx, a.ConclusionID) // wrapped call
	return results, err
}

// memosCreateForTreatment wraps memos.CreateForTreatment as function.Wrapper (generated code)
var memosCreateForTreatment memosCreateForTreatmentT

// memosCreateForTreatmentT wraps memos.CreateForTreatment as function.Wrapper (generated code)
type memosCreateForTreatmentT struct{}

func (memosCreateForTreatmentT) String() string {
	return "memos.CreateForTreatment(ctx context.Context, treatmentID uu.ID) (fileID uu.ID, err error)"
}

func (memosCreateForTreatmentT) Name() string {
	return "CreateForTreatment"
}

func (memosCreateForTreatmentT) NumArgs() int      { return 2 }
func (memosCreateForTreatmentT) ContextArg() bool  { return true }
func (memosCreateForTreatmentT) NumResults() int   { return 2 }
func (memosCreateForTreatmentT) ErrorResult() bool { return true }

func (memosCreateForTreatmentT) ArgNames() []string {
	return []string{"ctx", "treatmentID"}
}

func (memosCreateForTreatmentT) ArgDescriptions() []string {
	return []string{"", ""}
}

func (memosCreateForTreatmentT) ArgTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*context.Context)(nil)).Elem(),
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
	}
}

func (memosCreateForTreatmentT) ResultTypes() []reflect.Type {
	return []reflect.Type{
		reflect.TypeOf((*uu.ID)(nil)).Elem(),
		reflect.TypeOf((*error)(nil)).Elem(),
	}
}

func (f memosCreateForTreatmentT) Call(ctx context.Context, args []interface{}) (results []interface{}, err error) {
	results = make([]interface{}, 1)
	results[0], err = memos.CreateForTreatment(ctx, args[0].(uu.ID)) // wrapped call
	return results, err
}

func (f memosCreateForTreatmentT) CallWithStrings(ctx context.Context, strs ...string) (results []interface{}, err error) {
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
	results[0], err = memos.CreateForTreatment(ctx, a.treatmentID) // wrapped call
	return results, err
}

func (f memosCreateForTreatmentT) CallWithNamedStrings(ctx context.Context, strs map[string]string) (results []interface{}, err error) {
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
	results[0], err = memos.CreateForTreatment(ctx, a.treatmentID) // wrapped call
	return results, err
}

func (f memosCreateForTreatmentT) CallWithJSON(ctx context.Context, argsJSON []byte) (results []interface{}, err error) {
	var a struct {
		TreatmentID uu.ID
	}
	err = json.Unmarshal(argsJSON, &a)
	if err != nil {
		return nil, function.NewErrParseArgsJSON(err, f, argsJSON)
	}
	results = make([]interface{}, 1)
	results[0], err = memos.CreateForTreatment(ctx, a.TreatmentID) // wrapped call
	return results, err
}
