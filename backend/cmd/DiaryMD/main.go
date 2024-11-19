package main

import (
	"flag"

	_ "time/tzdata"

	"github.com/aceberg/DiaryMD/internal/web"
)

const dirPath = "/data/DiaryMD"

func main() {
	dirPtr := flag.String("d", dirPath, "Path to config dir")
	flag.Parse()

	web.Gui(*dirPtr) // webgui.go
}
