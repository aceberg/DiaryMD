package web

import (
	"log"
	// "net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/conf"
	"github.com/aceberg/DiaryMD/internal/models"
)

var (
	appConfig models.Conf
	allDirs   []models.DirsFiles
)

// Gui - start web server
func Gui(dirPath, nodePath string) {

	confPath := dirPath + "/config.yaml"
	check.Path(confPath)
	appConfig = conf.Get(confPath)

	appConfig.DirPath = dirPath
	appConfig.ConfPath = confPath
	appConfig.NodePath = nodePath

	// Remove later
	appConfig.RepoPath = "/home/data/repo/01-cloned/testrepo"

	log.Println("INFO: starting web gui with config", appConfig.ConfPath)

	address := appConfig.Host + ":" + appConfig.Port

	log.Println("=================================== ")
	log.Printf("Web GUI at http://%s", address)
	log.Println("=================================== ")

	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	// router.LoadHTMLGlob(TemplPath + "/*.html")
	router.GET("/api", apiHandler)       // api.go
	router.GET("/api/dirs/:id", apiDirs) // api.go

	err := router.Run(address)
	check.IfError(err)
}
