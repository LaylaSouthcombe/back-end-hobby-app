DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    second_name varchar(50) NOT NULL,
    password_digest varchar NOT NULL,
    email varchar(200) NOT NULL
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    summary varchar(100) NOT NULL,
    price int NOT NULL,
    open_to_swaps boolean NOT NULL,
    category_id int NOT NULL,
    subcategory_id int NOT NULL,
    user_id int NOT NULL,
    date_posted date DEFAULT CURRENT_TIMESTAMP,
    availability varchar(100) NOT NULL
);