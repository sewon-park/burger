
CREATE DATABASE burgers_db;


USE burgers_db;
DROP burgers if exists
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT False,
  PRIMARY KEY (id);
)