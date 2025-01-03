package handlers

type NavBar struct {
	Name string
	Link string
}

var NavBarLinks = []NavBar{
	{"Home", "/"},
	{"Projects", "/projects"},
	{"Journal", "/journal"},
	{"TTRPG", "#"},
}
