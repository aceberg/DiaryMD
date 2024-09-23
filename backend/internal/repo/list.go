package repo

import (
	"log"
	"os"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/models"
)

// List - list directory
func List(path string) (dirs []models.DirsFiles) {
	var dir models.DirsFiles

	f, err := os.Open(path)
	check.IfError(err)

	files, err := f.Readdir(0)
	check.IfError(err)

	for i, v := range files {
		log.Println(v.Name(), v.IsDir())

		dir.ID = i + 1
		dir.Name = v.Name()
		dir.IsDir = v.IsDir()
		dir.Path = path + "/" + dir.Name

		dirs = append(dirs, dir)
	}

	return dirs
}
