package routes

import (
	"fmt"
	"net/http"

	"github.com/bhidapa/heltin/pkg/file"
	"github.com/bhidapa/heltin/pkg/memos"
	"github.com/bhidapa/heltin/pkg/session"
	"github.com/gorilla/mux"

	"github.com/domonda/go-types/uu"
)

func API(router *mux.Router) {
	router.HandleFunc(
		fmt.Sprintf("/api/memos/for-treatment/{id:%s}.pdf", uu.IDRegex),
		session.Handler(http.HandlerFunc(memos.ForTreatment)),
	).Methods("GET")

	router.HandleFunc(
		fmt.Sprintf("/api/memos/for-conclusion/{id:%s}.pdf", uu.IDRegex),
		session.Handler(http.HandlerFunc(memos.ForConclusion)),
	).Methods("GET")

	router.HandleFunc(
		fmt.Sprintf("/api/file/{id:%s}", uu.IDRegex),
		session.Handler(http.HandlerFunc(file.Download)),
	).Methods("GET")
}
