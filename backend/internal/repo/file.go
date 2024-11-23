package repo

import (
	"log"
	"os"

	cp "github.com/otiai10/copy"

	"github.com/aceberg/DiaryMD/internal/check"
)

// ReadFile - read file content
func ReadFile(path string) string {

	file, err := os.ReadFile(path)
	check.IfError(err)

	return string(file)
}

// WriteFile - save file
func WriteFile(path, text string) {

	err := os.WriteFile(path, []byte(text), 0644)
	check.IfError(err)
}

// CreateFile - create file
func CreateFile(path string) {

	_, err := os.Create(path)
	check.IfError(err)
}

// CreateDir - create dir
func CreateDir(path string) {

	err := os.MkdirAll(path, 0774)
	check.IfError(err)
}

// Delete - removes file or dir
func Delete(path string) {

	log.Println("Deleting", path)

	err := os.RemoveAll(path)
	check.IfError(err)
}

// Move - rename or move file or dir
func Move(path, newPath string) {

	err := os.Rename(path, newPath)
	check.IfError(err)
}

// Copy - copy file or dir
func Copy(path string) {

	info := Info(path)
	newPath := info.UpPath + "/" + info.Name + "-copy"

	if info.IsDir {
		log.Println("Copy dir to", newPath)

		err := cp.Copy(path, newPath)
		check.IfError(err)

	} else {
		log.Println("Copy file to", newPath)

		CreateFile(newPath)
		fileText := ReadFile(path)
		WriteFile(newPath, fileText)
	}
}
