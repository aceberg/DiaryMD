package conf

import (
	"github.com/spf13/viper"

	"github.com/aceberg/DiaryMD/internal/check"
	"github.com/aceberg/DiaryMD/internal/models"
)

// Get - read config from file or env
func Get(path string) models.Conf {
	var config models.Conf

	viper.SetDefault("HOST", "0.0.0.0")
	viper.SetDefault("PORT", "8854")
	viper.SetDefault("REPOPATH", "")
	viper.SetDefault("THEME", "sand")
	viper.SetDefault("C_MODE", "light")
	viper.SetDefault("C_MENU", "#dfb377")
	viper.SetDefault("C_EDIT", "#faeddc")
	viper.SetDefault("C_BACK", "#f8e6cc")

	viper.SetConfigFile(path)
	viper.SetConfigType("yaml")
	err := viper.ReadInConfig()
	check.IfError(err)

	viper.AutomaticEnv() // Get ENVIRONMENT variables

	config.Host, _ = viper.Get("HOST").(string)
	config.Port, _ = viper.Get("PORT").(string)
	config.RepoPath, _ = viper.Get("REPOPATH").(string)
	config.Theme, _ = viper.Get("THEME").(string)
	config.ColorMode, _ = viper.Get("C_MODE").(string)
	config.ColorMenu, _ = viper.Get("C_MENU").(string)
	config.ColorEdit, _ = viper.Get("C_EDIT").(string)
	config.ColorBack, _ = viper.Get("C_BACK").(string)

	return config
}

// Write - write config to file
func Write(config models.Conf) {

	viper.SetConfigFile(config.ConfPath)
	viper.SetConfigType("yaml")

	viper.Set("host", config.Host)
	viper.Set("port", config.Port)
	viper.Set("repopath", config.RepoPath)
	viper.Set("theme", config.Theme)
	viper.Set("c_mode", config.ColorMode)
	viper.Set("c_menu", config.ColorMenu)
	viper.Set("c_edit", config.ColorEdit)
	viper.Set("c_back", config.ColorBack)

	err := viper.WriteConfig()
	check.IfError(err)
}
