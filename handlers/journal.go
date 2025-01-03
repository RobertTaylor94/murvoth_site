package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Journal(c *gin.Context) {
	c.HTML(http.StatusOK, "journal.html", gin.H{
		"title": "Journal",
		"tabs": NavBarLinks,
	})
}