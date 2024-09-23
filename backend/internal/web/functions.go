package web

import (
	"github.com/aceberg/DiaryMD/internal/models"
)

func getDirByID(dirs []models.DirsFiles, id int) (dir models.DirsFiles) {

	for _, d := range dirs {
		if id == d.ID {
			dir = d
			break
		}
	}
	return dir
}
