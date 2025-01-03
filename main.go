package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"murvoth.com/website/handlers"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	s := http.Server {
		Addr:         ":5050",
		Handler:      r,
		ReadTimeout:  10 * time.Second,
	}

	r.LoadHTMLGlob("templates/*")

	r.GET("/", handlers.Home)
	r.GET("/projects", handlers.Projects)
	r.GET("/projects/discord", handlers.Discord)
	r.GET("/ping", handlers.Ping)

	fmt.Println("Starting server on port 5050")
	if err := s.ListenAndServe(); err != nil {
		log.Fatalf("error launching web server: %v", err)
	}
}
