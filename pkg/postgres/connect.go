package postgres

import (
	"context"
	"time"

	"github.com/bhidapa/heltin/pkg/env"
	"github.com/domonda/go-sqldb"
	"github.com/domonda/go-sqldb/db"
	"github.com/domonda/go-sqldb/pqconn"
)

var config struct {
	Host            string `env:"POSTGRES_HOST" envDefault:"localhost"`
	Port            uint16 `env:"POSTGRES_PORT"`
	User            string `env:"POSTGRES_USER" envDefault:"postgres"`
	Password        string `env:"POSTGRES_PASSWORD"`
	DB              string `env:"POSTGRES_DB" envDefault:"heltin"`
	MaxOpenConns    int    `env:"POSTGRES_MAX_OPEN_CONNS"`
	MaxIdleConns    int    `env:"POSTGRES_MAX_IDLE_CONNS"`
	ConnMaxLifetime string `env:"POSTGRES_CONN_MAX_LIFETIME"`
}

func NewConnection(ctx context.Context) (sqldb.Connection, error) {
	err := env.Parse(&config)
	if err != nil {
		return nil, err
	}

	sqlconfig := sqldb.Config{
		Driver:       "postgres",
		Host:         config.Host,
		Port:         uint16(config.Port),
		User:         config.User,
		Password:     config.Password,
		Database:     config.DB,
		Extra:        map[string]string{"sslmode": "disable"},
		MaxOpenConns: config.MaxOpenConns,
		MaxIdleConns: config.MaxIdleConns,
	}

	if config.ConnMaxLifetime != "" {
		sqlconfig.ConnMaxLifetime, err = time.ParseDuration(config.ConnMaxLifetime)
		if err != nil {
			return nil, err
		}
	}

	return pqconn.New(ctx, &sqlconfig)
}

func Connect(ctx context.Context) error {
	newConn, err := NewConnection(ctx)
	if err != nil {
		return err
	}
	db.SetConn(newConn)
	return nil
}
