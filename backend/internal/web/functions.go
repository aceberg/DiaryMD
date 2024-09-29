package web

import (
	"strconv"

	"github.com/aceberg/DiaryMD/internal/models"
)

func getDirByID(dirs []models.DirsFiles, idStr string) (dir models.DirsFiles) {

	id, _ := strconv.Atoi(idStr)

	if id == 0 {
		dir.ID = 0
		dir.Name = ""
		dir.Path = appConfig.RepoPath
		dir.IsDir = true
		dir.Parent = 0
	} else {
		for _, d := range dirs {
			if id == d.ID {
				dir = d
				break
			}
		}
	}

	return dir
}
