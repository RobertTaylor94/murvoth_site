package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
    c.HTML(http.StatusOK, "home.html", gin.H{
        "title": "Home",
        "tabs": []struct {
            Name string
            Link string
        }{
            {"Home", "/"},
            {"Projects", "/projects"},
            {"TTRPG", "#"},
        },
    })
}