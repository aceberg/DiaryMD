package web

import (
	"encoding/json"
	"log"
	"net/http"
	"sort"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/conf"
	"github.com/aceberg/DiaryMD/internal/models"
	"github.com/aceberg/DiaryMD/internal/repo"
	"github.com/aceberg/DiaryMD/internal/yaml"
)

func apiHandler(c *gin.Context) {

	msg := "This is API"
	log.Println(msg)

	c.IndentedJSON(http.StatusOK, msg)
}

func apiGetConfig(c *gin.Context) {

	c.IndentedJSON(http.StatusOK, appConfig)
}

func apiSetConfig(c *gin.Context) {

	appConfig.RepoPath = c.PostForm("path")
	appConfig.BlogPath = c.PostForm("blog")
	step := c.PostForm("step")
	appConfig.PageStep, _ = strconv.Atoi(step)

	conf.Write(appConfig)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiSetTheme(c *gin.Context) {

	appConfig.Colors.Theme = c.PostForm("theme")
	appConfig.Colors.Font = c.PostForm("font")
	appConfig.Colors.Menu = c.PostForm("menu")
	appConfig.Colors.Edit = c.PostForm("edit")
	appConfig.Colors.Back = c.PostForm("back")
	appConfig.Colors.Outline = c.PostForm("outline")

	conf.Write(appConfig)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiDirList(c *gin.Context) {
	var curDirs []models.DirsFiles
	var dirs, folders []models.DirsFiles

	path := c.Query("path")
	if path == "" || path == "undefined" {
		curDirs = repo.ListPath(appConfig.RepoPath)
	} else {
		curDirs = repo.ListPath(path)
	}

	sort.Slice(curDirs, func(i, j int) bool {
		return curDirs[i].Name < curDirs[j].Name
	})

	// Sort by .IsDir field
	for _, d := range curDirs {
		if d.IsDir {
			dirs = append(dirs, d)
		} else {
			folders = append(folders, d)
		}
	}
	curDirs = append(dirs, folders...)

	c.IndentedJSON(http.StatusOK, curDirs)
}

func apiDirInfo(c *gin.Context) {
	var dir models.DirsFiles

	path := c.Query("path")
	if path == "" || path == "undefined" {
		dir = repo.Info(appConfig.RepoPath)
	} else {
		dir = repo.Info(path)
	}

	c.IndentedJSON(http.StatusOK, dir)
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

	path := c.Query("path")
	str := c.Query("str")

	dirs := repo.Search(path, str)

	c.IndentedJSON(http.StatusOK, dirs)
}

func apiGetFileText(c *gin.Context) {

	path := c.Query("path")

	// log.Println("PATH:", path)
	file := repo.ReadFile(path)

	c.IndentedJSON(http.StatusOK, file)
}

func apiGetWork(c *gin.Context) {

	workSpaces := yaml.Read(appConfig.WsPath)

	c.IndentedJSON(http.StatusOK, workSpaces)
}

func apiSetWork(c *gin.Context) {
	var workSpaces []models.WorkSpace

	wStr := c.PostForm("workspaces")

	err := json.Unmarshal([]byte(wStr), &workSpaces)
	check.IfError(err)

	yaml.Write(appConfig.WsPath, workSpaces)

	c.IndentedJSON(http.StatusOK, "OK")
}

func apiCopy(c *gin.Context) {

	path := c.Query("path")
	if path != "" && path != "undefined" {

		repo.Copy(path)
	}

	c.IndentedJSON(http.StatusOK, "OK")
}
