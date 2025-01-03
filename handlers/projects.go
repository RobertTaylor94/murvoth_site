package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Projects(c *gin.Context) {
	c.HTML(http.StatusOK, "projects.html", gin.H{
		"title": "Projects",
		"tabs": NavBarLinks,
		"projects": []struct {
			Name string
			Link string
		}{
			{"Discord Bot", "/projects/discord"},
			// {"GridWatch", "/projects/gridwatch"},
		},
	})
}
