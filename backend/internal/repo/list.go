package repo

import (
	"os"
	"path/filepath"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/models"
)

// ListPath - list directory
func ListPath(path string) (dirs []models.DirsFiles) {
	var dir models.DirsFiles

	f, err := os.Open(path)
	check.IfError(err)

	files, err := f.Readdir(0)
	check.IfError(err)

	for _, file := range files {

		dir.Name = file.Name()
		dir.IsDir = file.IsDir()
		dir.Path = path + "/" + dir.Name
		dir.UpPath = path

		dirs = append(dirs, dir)
	}

	return dirs
}

// Info - info about directory
func Info(path string) (file models.DirsFiles) {

	fInfo, err := os.Stat(path)
	check.IfError(err)

	file.Name = filepath.Base(path)
	file.IsDir = fInfo.IsDir()
	file.Path = path
	file.UpPath = filepath.Dir(path)

	return file
}
