package web

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	// "github.com/aceberg/DiaryMD/internal/models"
	"github.com/aceberg/DiaryMD/internal/repo"
)

func apiHandler(c *gin.Context) {

	msg := "This is API"
	log.Println(msg)

	c.IndentedJSON(http.StatusOK, msg)
}

func apiDirs(c *gin.Context) {

	idStr := c.Param("id")
	id, _ := strconv.Atoi(idStr)

	if id == 0 {
		allDirs = repo.List(appConfig.RepoPath)
	} else {
		d := getDirByID(allDirs, id)
		allDirs = repo.List(d.Path)
	}

	c.IndentedJSON(http.StatusOK, allDirs)
}
