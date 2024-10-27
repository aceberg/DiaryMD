package yaml

import (
	"log"
	"os"

	"gopkg.in/yaml.v3"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/models"
)

// Read - read .yaml file to struct
func Read(path string) []models.WorkSpace {

	file, err := os.ReadFile(path)
	check.IfError(err)

	var workSpaces []models.WorkSpace
	err = yaml.Unmarshal(file, &workSpaces)
	check.IfError(err)

	return workSpaces
}

// Write - write struct to  .yaml file
func Write(path string, workSpaces []models.WorkSpace) {

	yamlData, err := yaml.Marshal(&workSpaces)
	check.IfError(err)

	err = os.WriteFile(path, yamlData, 0644)
	check.IfError(err)

	log.Println("INFO: writing new WorkSpaces file to", path)
}
