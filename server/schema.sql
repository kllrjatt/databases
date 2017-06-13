CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE messages
(
  id int NOT NULL
  AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar
  (200)  NOT NULL,
  roomname varchar
  (20),
  PRIMARY KEY
  (ID)
);

  CREATE TABLE users
  (
    id int NOT NULL
    AUTO_INCREMENT,
  username  varchar
    (40)   NOT NULL,
  PRIMARY KEY
    (ID)
);

