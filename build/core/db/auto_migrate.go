package db

import (
	"effectivesolution/core/eslog"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	_ "github.com/lib/pq"
)

// func MigrateOld() {
// 	Conn.AutoMigrate(&entities.User{})
// 	Conn.AutoMigrate(&entities.Currency{})
// 	Conn.AutoMigrate(&entities.Role{})
// 	Conn.AutoMigrate(&entities.Permission{})
// 	Conn.AutoMigrate(&entities.RolePermission{})
// 	Conn.AutoMigrate(&entities.UserRole{})
// 	Conn.AutoMigrate(&entities.Casino{})
// 	Conn.AutoMigrate(&entities.Game{})
// 	Conn.AutoMigrate(&entities.LogApi{})
// 	Conn.AutoMigrate(&entities.AdminNotify{})
// 	Conn.AutoMigrate(&entities.GameApi{})
// 	Conn.AutoMigrate(&entities.GameData{})
// 	Conn.AutoMigrate(&entities.GameCategory{})
// 	Conn.AutoMigrate(&entities.GameCategoryItem{})
// 	Conn.AutoMigrate(&entities.GameProvider{})
// 	Conn.AutoMigrate(&entities.GameProviderItem{})
// }

func Migrate() {
	rawConn, err := Conn.DB()
	if err != nil {
		eslog.PanicLog("Error #83: " + err.Error())
	}
	driver, err := postgres.WithInstance(rawConn, &postgres.Config{})
	if err != nil {
		eslog.PanicLog("Error #84: " + err.Error())
	}
	m, err := migrate.NewWithDatabaseInstance(
		"file://./core/db/migrations",
		"postgres", driver)
	if err != nil {
		eslog.PanicLog("Error #85: " + err.Error())
	}
	m.Up()
}
