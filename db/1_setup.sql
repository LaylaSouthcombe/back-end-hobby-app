DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    age int NOT NULL,
    owner_id int
);

DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    address varchar(255)
);