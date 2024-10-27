package models

// Conf - web gui config
type Conf struct {
	Host     string
	Port     string
	Colors   ColorTheme
	ConfPath string
	DirPath  string
	WsPath   string
	RepoPath string
	BlogPath string
	PageStep int
}

// ColorTheme - color theme
type ColorTheme struct {
	Theme   string `yaml:"theme" json:"Theme"`
	Menu    string `yaml:"menu" json:"Menu"`
	Edit    string `yaml:"edit" json:"Edit"`
	Back    string `yaml:"back" json:"Back"`
	Font    string `yaml:"font" json:"Font"`
	Outline string `yaml:"outline" json:"Outline"`
}

// DirsFiles - list dir results
type DirsFiles struct {
	Name   string
	Path   string
	IsDir  bool
	UpPath string
}

// WorkSpace - one workspace
type WorkSpace struct {
	Name     string      `yaml:"name" json:"Name"`
	Colors   ColorTheme  `yaml:"colors" json:"Colors"`
	RepoPath string      `yaml:"repopath" json:"RepoPath"`
	BlogPath string      `yaml:"blogpath" json:"BlogPath"`
	PageStep int         `yaml:"page_step" json:"PageStep"`
	CurFile  DirsFiles   `yaml:"cur_file" json:"CurFile"`
	Tabs     []DirsFiles `yaml:"tabs" json:"Tabs"`
}
