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

CREATE TABLE `Messages`
(
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar
(200)  NOT NULL,
  roomname varchar
(20),
  PRIMARY KEY
(ID)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users`
 id        int    NOT NULL AUTO_INCREMENT,
  username  varchar
(40)   NOT NULL,
  PRIMARY KEY
(ID);




-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`text`,`createdAt`,`id_Users`,`id_Rooms`) VALUES
-- ('','','','','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
