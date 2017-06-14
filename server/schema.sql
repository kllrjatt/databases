DROP DATABASE if exists chat;

CREATE DATABASE chat;

USE chat;

-- add messages table
-- add id integer 
-- add userid 
-- add primary key on id 
-- add room name 
-- add text option

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE messages
(
  id int NOT NULL
  AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar
  (200),
  roomname varchar
  (20),
  PRIMARY KEY
  (ID)
);

  -- add user table 
  -- add id integer 
  -- add user name
  -- add primary key on id 

  DROP TABLE IF EXISTS `user`;

  CREATE TABLE users
  (
    id int NOT NULL
    AUTO_INCREMENT,
  username  varchar
    (40) NOT NULL UNIQUE,
  PRIMARY KEY
    (ID)
);

