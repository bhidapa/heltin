package routes

import (
	"fmt"
	"net/http"

	"github.com/bhidapa/heltin/pkg/file"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/gorilla/mux"

	"github.com/domonda/go-function"
	"github.com/domonda/go-types/uu"
)

func API(router *mux.Router) {
	router.Handle(
		fmt.Sprintf("/api/memos/for-conclusion/{conclusionID:%s}", uu.IDRegex),
		session.Handler(
			function.HTTPHandler(
				getMuxVars,
				memosCreateForConclusion,
				function.RespondPlaintext,
			),
		),
	).Methods("PUT")

	router.Handle(
		fmt.Sprintf("/api/memos/for-treatment/{treatmentID:%s}", uu.IDRegex),
		session.Handler(
			function.HTTPHandler(
				getMuxVars,
				memosCreateForTreatment,
				function.RespondPlaintext,
			),
		),
	).Methods("PUT")

	router.HandleFunc(
		fmt.Sprintf("/api/file/{id:%s}", uu.IDRegex),
		session.Handler(http.HandlerFunc(file.Download)),
	).Methods("GET")
}

func getMuxVars(request *http.Request) (map[string]string, error) {
	return mux.Vars(request), nil
}
