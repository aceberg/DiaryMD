package web

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/DiaryMD/internal/models"
	"github.com/aceberg/DiaryMD/internal/repo"
)

func apiHandler(c *gin.Context) {

	msg := "This is API"
	log.Println(msg)

	c.IndentedJSON(http.StatusOK, msg)
}

func apiGetConfig(c *gin.Context) {

	c.IndentedJSON(http.StatusOK, appConfig)
}

func apiDirsLs(c *gin.Context) {
	var curDirs []models.DirsFiles

	idStr := c.Param("id")

	// TODO: potential problem here (map instead of slice?)
	if idStr == "0" {
		allDirs = repo.List(appConfig.RepoPath, 0)
		curDirs = allDirs
	} else {
		d := getDirByID(allDirs, idStr)
		curDirs = repo.List(d.Path, d.ID)
		allDirs = append(allDirs, curDirs...)
	}

	c.IndentedJSON(http.StatusOK, curDirs)
}

func apiDirsInfo(c *gin.Context) {
	var dir models.DirsFiles

	idStr := c.Param("id")

	dir = getDirByID(allDirs, idStr)

	c.IndentedJSON(http.StatusOK, dir)
}

func apiGetFile(c *gin.Context) {

	idStr := c.Param("id")

	f := getDirByID(allDirs, idStr)
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

func apiNewFile(c *gin.Context) {

	path := c.PostForm("path")
	repo.CreateFile(path)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiNewDir(c *gin.Context) {

	path := c.PostForm("path")
	repo.CreateDir(path)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiDelete(c *gin.Context) {

	path := c.PostForm("path")
	repo.Delete(path)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiMove(c *gin.Context) {

	path := c.PostForm("path")
	newPath := c.PostForm("newpath")

	repo.Move(path, newPath)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiSearch(c *gin.Context) {

	idStr := c.Param("id")
	str := c.Param("str")

	d := getDirByID(allDirs, idStr)
	dirs := repo.Search(d.Path, str)

	// log.Println("ID, str, d", idStr, str, d)

	c.IndentedJSON(http.StatusOK, dirs)
}
