package repo

import (
	"hash/fnv"
	"log"
	"os"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/models"
)

// List - list directory
func List(path string, lastID int) (dirs []models.DirsFiles) {
	var dir models.DirsFiles

	f, err := os.Open(path)
	check.IfError(err)

	files, err := f.Readdir(0)
	check.IfError(err)

	for _, v := range files {

		dir.Name = v.Name()
		dir.IsDir = v.IsDir()
		dir.Path = path + "/" + dir.Name
		dir.Parent = lastID

		h := fnv.New32a()
		h.Write([]byte(dir.Path))

		dir.ID = int(h.Sum32())

		log.Println(dir.ID, ":", dir.Path)

		dirs = append(dirs, dir)
	}

	return dirs
}
