package repo

import (
	// "log"
	"os"

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
