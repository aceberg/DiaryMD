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
	viper.SetDefault("BLOGPATH", "")
	viper.SetDefault("PAGE_STEP", 3)
	viper.SetDefault("THEME", "sand")
	viper.SetDefault("C_FONT", "#313136")
	viper.SetDefault("C_MENU", "#dfb377")
	viper.SetDefault("C_EDIT", "#faeddc")
	viper.SetDefault("C_BACK", "#f8e6cc")
	viper.SetDefault("C_OUTLINE", "#616161")

	viper.SetConfigFile(path)
	viper.SetConfigType("yaml")
	err := viper.ReadInConfig()
	check.IfError(err)

	viper.AutomaticEnv() // Get ENVIRONMENT variables

	config.Host, _ = viper.Get("HOST").(string)
	config.Port, _ = viper.Get("PORT").(string)
	config.RepoPath, _ = viper.Get("REPOPATH").(string)
	config.BlogPath, _ = viper.Get("BLOGPATH").(string)
	config.PageStep = viper.GetInt("PAGE_STEP")
	config.Colors.Theme, _ = viper.Get("THEME").(string)
	config.Colors.Font, _ = viper.Get("C_FONT").(string)
	config.Colors.Menu, _ = viper.Get("C_MENU").(string)
	config.Colors.Edit, _ = viper.Get("C_EDIT").(string)
	config.Colors.Back, _ = viper.Get("C_BACK").(string)
	config.Colors.Outline, _ = viper.Get("C_OUTLINE").(string)

	return config
}

// Write - write config to file
func Write(config models.Conf) {

	viper.SetConfigFile(config.ConfPath)
	viper.SetConfigType("yaml")

	viper.Set("host", config.Host)
	viper.Set("port", config.Port)
	viper.Set("repopath", config.RepoPath)
	viper.Set("blogpath", config.BlogPath)
	viper.Set("page_step", config.PageStep)
	viper.Set("theme", config.Colors.Theme)
	viper.Set("c_font", config.Colors.Font)
	viper.Set("c_menu", config.Colors.Menu)
	viper.Set("c_edit", config.Colors.Edit)
	viper.Set("c_back", config.Colors.Back)
	viper.Set("c_outline", config.Colors.Outline)

	err := viper.WriteConfig()
	check.IfError(err)
}
