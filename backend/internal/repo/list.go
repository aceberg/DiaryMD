package repo

import (
	"hash/fnv"
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

		dir = formDir(v, path)
		dir.Parent = lastID
		dirs = append(dirs, dir)
	}

	return dirs
}

func formDir(file os.FileInfo, path string) (dir models.DirsFiles) {

	dir.Name = file.Name()
	dir.IsDir = file.IsDir()
	dir.Path = path + "/" + dir.Name

	h := fnv.New32a()
	h.Write([]byte(dir.Path))

	dir.ID = int(h.Sum32())

	return dir
}
