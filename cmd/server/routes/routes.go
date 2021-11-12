package routes

import (
	"fmt"
	"net/http"

	"github.com/bhidapa/heltin/pkg/reports"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/gorilla/mux"

	"github.com/domonda/go-types/uu"
)

func API(router *mux.Router) {
	router.HandleFunc(
		fmt.Sprintf("/api/report/for-treatment/{id:%s}.pdf", uu.IDRegex),
		session.Handler(http.HandlerFunc(reports.ForTreatment)),
	).Methods("GET")
}
