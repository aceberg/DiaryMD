package repo

import (
	// "log"
	"os"
	"strings"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/models"
)

// Search - search directory
func Search(path, searchStr string) []models.DirsFiles {

	foundFiles = []models.DirsFiles{}

	recursSearch(path, searchStr)
	// log.Println("Search:", foundFiles)

	return foundFiles
}

var foundFiles []models.DirsFiles

func recursSearch(path, searchStr string) {
	var dir models.DirsFiles
	var fileStr, vPath string

	f, err := os.Open(path)
	check.IfError(err)

	files, err := f.Readdir(0)
	check.IfError(err)

	for _, v := range files {

		vPath = path + "/" + v.Name()
		if !v.IsDir() {
			fileStr = ReadFile(vPath)

			if strings.Contains(strings.ToLower(fileStr), strings.ToLower(searchStr)) {

				dir = formDir(v, path)
				dir.Parent = 0
				foundFiles = append(foundFiles, dir)
			}
		} else {
			recursSearch(vPath, searchStr)
		}
	}
}

func formDir(file os.FileInfo, path string) (dir models.DirsFiles) {

	dir.Name = file.Name()
	dir.IsDir = file.IsDir()
	dir.Path = path + "/" + dir.Name

	return dir
}
