-- CREATE DATABASE chat;

USE chat;

DROP TABLE messages;
DROP TABLE users;
DROP TABLE rooms;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) AUTO_INCREMENT,
  content VARCHAR(255),
  user VARCHAR(255),
  room VARCHAR(255),
  -- createdAt DATETIME(5),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   id INT(11) AUTO_INCREMENT,
--   roomname VARCHAR(255),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id INT(11) AUTO_INCREMENT,
--   content VARCHAR(255),
--   user INT(11),
--   room INT(11),
--   createdAt DATETIME(5),
--   PRIMARY KEY (id),
--   FOREIGN KEY (user) REFERENCES users(id)
--   ON DELETE CASCADE,
--   FOREIGN KEY (room) REFERENCES rooms(id)
--   ON DELETE CASCADE
-- );


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

