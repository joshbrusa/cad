package main

import (
	"core/src/handlers"
	"log"
	"net/http"
)

func main() {
	port := "8000"

	mux := http.NewServeMux()

	mux.Handle("/", handlers.RootHandler())

	log.Println("server is listening on port: " + port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
