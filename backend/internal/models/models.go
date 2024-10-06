package models

// Conf - web gui config
type Conf struct {
	Host   string
	Port   string
	Colors ColorTheme
	// Theme     string
	// ColorMode string
	// ColorMenu string
	// ColorEdit string
	// ColorBack string
	ConfPath string
	DirPath  string
	NodePath string
	RepoPath string
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
