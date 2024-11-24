package web

import (
	"embed"
	"html/template"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/conf"
	"github.com/aceberg/DiaryMD/internal/models"
)

var (
	appConfig models.Conf

	// pubFS - public folder
	//
	//go:embed public/assets/*
	assetsFS embed.FS

	//go:embed public/index.html
	templFS embed.FS
)

// Gui - start web server
func Gui(dirPath string) {

	confPath := dirPath + "/config.yaml"
	check.Path(confPath)
	appConfig = conf.Get(confPath)

	appConfig.DirPath = dirPath
	appConfig.ConfPath = confPath
	appConfig.WsPath = dirPath + "/workspaces.yaml"
	check.Path(appConfig.WsPath)

	log.Println("INFO: starting web gui with config", appConfig.ConfPath)

	address := appConfig.Host + ":" + appConfig.Port

	log.Println("=================================== ")
	log.Printf("Web GUI at http://%s", address)
	log.Println("=================================== ")

	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	templ := template.Must(template.New("").ParseFS(templFS, "public/index.html"))
	router.SetHTMLTemplate(templ) // templates

	router.GET("/", indexHandler)          // index.go
	router.GET("/wsp/:name", indexHandler) // index.go
	router.StaticFS("/fs", http.FS(assetsFS))

	router.GET("/api", apiHandler)               // api.go
	router.GET("/api/config", apiGetConfig)      // api.go
	router.GET("/api/copy", apiCopy)             // api.go
	router.GET("/api/dir/list", apiDirList)      // api.go
	router.GET("/api/dir/info", apiDirInfo)      // api.go
	router.GET("/api/file/text", apiGetFileText) // api.go
	router.GET("/api/search", apiSearch)         // api.go
	router.GET("/api/workspaces", apiGetWork)    // api.go

	router.POST("/api/config", apiSetConfig)   // api.go
	router.POST("/api/del", apiDelete)         // api.go
	router.POST("/api/file", apiFileSave)      // api.go
	router.POST("/api/move", apiMove)          // api.go
	router.POST("/api/new/file", apiNewFile)   // api.go
	router.POST("/api/new/dir", apiNewDir)     // api.go
	router.POST("/api/theme", apiSetTheme)     // api.go
	router.POST("/api/workspaces", apiSetWork) // api.go

	err := router.Run(address)
	check.IfError(err)
}
