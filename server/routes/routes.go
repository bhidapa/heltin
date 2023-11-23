package routes

import (
	"fmt"
	"net/http"

	"github.com/bhidapa/heltin/internal/file"
	"github.com/bhidapa/heltin/internal/session"
	"github.com/gorilla/mux"

	"github.com/domonda/go-function"
	"github.com/domonda/go-types/uu"
)

func API(router *mux.Router) {
	router.Handle(
		fmt.Sprintf("/api/reports/for-conclusion/{conclusionID:%s}", uu.IDRegex),
		session.Handler(
			function.HTTPHandler(
				getMuxVars,
				reportsCreateForConclusion,
				function.RespondPlaintext,
			),
		),
	).Methods("POST")

	router.Handle(
		fmt.Sprintf("/api/reports/for-treatment/{treatmentID:%s}", uu.IDRegex),
		session.Handler(
			function.HTTPHandler(
				getMuxVars,
				reportsCreateForTreatment,
				function.RespondPlaintext,
			),
		),
	).Methods("POST")

	router.HandleFunc(
		// matches the link specified in database/schema/public/file.sql@public.file_link
		fmt.Sprintf("/api/file/{id:%s}", uu.IDRegex),
		session.Handler(http.HandlerFunc(file.Download)),
	).Methods("GET")

	router.HandleFunc(
		"/api/file/upload",
		session.Handler(http.HandlerFunc(file.Upload)),
	).Methods("POST")

	router.HandleFunc(
		fmt.Sprintf("/api/file/{id:%s}", uu.IDRegex),
		session.Handler(
			function.HTTPHandler(
				getMuxVars,
				fileDelete,
				function.RespondNothing,
			),
		),
	).Methods("DELETE")
}

func getMuxVars(request *http.Request) (map[string]string, error) {
	return mux.Vars(request), nil
}
