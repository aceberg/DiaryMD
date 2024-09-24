package web

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/DiaryMD/internal/models"
	"github.com/aceberg/DiaryMD/internal/repo"
)

func apiHandler(c *gin.Context) {

	msg := "This is API"
	log.Println(msg)

	c.IndentedJSON(http.StatusOK, msg)
}

func apiDirsLs(c *gin.Context) {
	var curDirs []models.DirsFiles

	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)

	if id == 0 {
		allDirs = repo.List(appConfig.RepoPath, 0)
		curDirs = allDirs
	} else {
		d := getDirByID(allDirs, id)
		curDirs = repo.List(d.Path, id)
		allDirs = append(allDirs, curDirs...)
	}

	c.IndentedJSON(http.StatusOK, curDirs)
}

func apiDirsInfo(c *gin.Context) {
	var dir models.DirsFiles

	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)

	if id == 0 {
		dir.ID = 0
		dir.Name = "/"
		dir.IsDir = true
		dir.Parent = 0
	} else {
		dir = getDirByID(allDirs, id)
	}

	c.IndentedJSON(http.StatusOK, dir)
}

func apiGetFile(c *gin.Context) {

	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)

	f := getDirByID(allDirs, id)
	file := repo.ReadFile(f.Path)

	c.IndentedJSON(http.StatusOK, file)
}

func apiFileSave(c *gin.Context) {

	path := c.PostForm("path")
	text := c.PostForm("text")

	// log.Println(path, "\n", text)
	repo.WriteFile(path, text)

	c.IndentedJSON(http.StatusOK, "OK")
}
