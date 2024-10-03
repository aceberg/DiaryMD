package models

// Conf - web gui config
type Conf struct {
	Host      string
	Port      string
	Theme     string
	ColorMode string
	ColorMenu string
	ColorEdit string
	ColorBack string
	ConfPath  string
	DirPath   string
	NodePath  string
	RepoPath  string
}

// DirsFiles - list dir results
type DirsFiles struct {
	ID     int
	Name   string
	Path   string
	IsDir  bool
	Parent int
}
