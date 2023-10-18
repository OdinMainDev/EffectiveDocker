package db

import (
	"effectivesolution/core/config"
	"effectivesolution/core/eslog"
	"fmt"
	"time"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
)

var Conn *gorm.DB

func Initialize() {
	godotenv.Load()

	dsn := fmt.Sprintf(
		"host=%v user=%v password=%v dbname=%v port=%v sslmode=%v TimeZone=%v",
		config.DbHost, config.DbUser, config.DbPassword,
		config.DbName, config.DbPort, config.DbSSLMode, config.DbTimezone,
	)

	log_level := logger.Silent
	if config.AppDebug {
		log_level = logger.Info
	}

	gormConfig := &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
		Logger: logger.Default.LogMode(log_level),
	}

	var err error
	eslog.InfoLogger.Info("connecting to database")
	Conn, err = gorm.Open(postgres.New(postgres.Config{
		DSN:                  dsn,
		PreferSimpleProtocol: true,
	}), gormConfig)
	if err != nil {
		eslog.PanicLog("[PANIC] Error #1", err.Error())
	}
	sqlDB, err := Conn.DB()
	if err != nil {
		eslog.PanicLog("[PANIC] Error #2", err.Error())
	}

	sqlDB.SetMaxIdleConns(15)
	sqlDB.SetMaxOpenConns(30)
	sqlDB.SetConnMaxLifetime(time.Minute * 5)
}
