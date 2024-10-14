package models

// Conf - web gui config
type Conf struct {
	Host     string
	Port     string
	Colors   ColorTheme
	ConfPath string
	DirPath  string
	NodePath string
	RepoPath string
	BlogPath string
	PageStep int
}

// ColorTheme - color theme
type ColorTheme struct {
	Theme   string
	Menu    string
	Edit    string
	Back    string
	Font    string
	Outline string
}

// DirsFiles - list dir results
type DirsFiles struct {
	ID     int
	Name   string
	Path   string
	IsDir  bool
	Parent int
}
