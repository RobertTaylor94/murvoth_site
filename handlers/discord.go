package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Discord(c *gin.Context) {
	c.HTML(http.StatusOK, "discord_bot.html", gin.H{
		"title": "Discord Bot",
		"tabs": NavBarLinks,
		"commands": []struct {
			Name string
			Command string
			Description string
			Subcommands []struct{
				Name string
				Description string
			}
		}{
			{ // /q
				"Roll",
				"/q",
				"The most basic command for rolling dice, allows users to input an expression to be rolled.",
				[]struct{Name string; Description string}{},
			},
			{ // config command
				"Config Command", 
				"/conf",
				"The Config command allows users to see and modify their custom configuration for the app",
				[]struct{Name string; Description string}{
					{
						Name: "/conf view",
						Description: "View current user configuration",
					},
					{
						Name: "/conf update",
						Description: "Update current user configuration, when using /conf update, a drop down list of available properties appears to the user to change",
					},
				},
			},
			{ // custom roll command
				"Custom Dice Command", 
				"/cr", 
				"The Custom Roll command allows users to view, add, delete and use custom rolls in their profile",
				[]struct{Name string; Description string}{
					{
						Name: "/cr check",
						Description: "Send an ephemeral message to the user showing their currently assigned custom rolls",
					},
					{
						Name: "/cr add",
						Description: "Allows the user to add a new custom roll to their profile. Options include the roll name, type (attack or other) and expression.",
					},
					{
						Name: "/cr delete",
						Description: "Asks the user to input a name and removes that dice roll if found.",
					},
					{
						Name: "/cr roll",
						Description: "Asks the user for a roll name and performs a roll based on the saved exprerssion. Optional extras allow for adding additional modifiers to the roll",
					},
				},
			},
		},
	})
}