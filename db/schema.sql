CREATE DATABASE IF NOT EXISTS burgerDB,
 use burgerDB;

DROP TABLE IF EXISTS burgers;

 CREATE TABLE burgers (
     id INTEGER NOT NULL AUTO_INCREMENT,
     burger_name VARCHAR(100) NOT NULL,
     devoured BOOLEAN DEFAULT FALSE,
     PRIMARY KEY (id)
 );