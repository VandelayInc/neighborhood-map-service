DROP DATABASE VandelayInc;

CREATE DATABASE VandelayInc;

USE VandelayInc;

CREATE TABLE neighborhoods (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  city VARCHAR(25) NOT NULL,
  country VARCHAR(25) NOT NULL,
  lat DECIMAL(6,4) NOT NULL,
  lng DECIMAL(7,4) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zipcode VARCHAR(10) NOT NULL,
  neighborhood_overview VARCHAR(500) NOT NULL,
  transit VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
);


LOAD DATA LOCAL INFILE '/Users/stevehallam/Documents/HR_Immersive/sdc/neighborhood-map-service/db/seeding/json_csv/tenMillion.csv' 
INTO TABLE neighborhoods 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;