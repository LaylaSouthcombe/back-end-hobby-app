DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    second_name varchar(50) NOT NULL,
    password_digest varchar NOT NULL,
    email varchar(200) NOT NULL,
    last_login date DEFAULT CURRENT_TIMESTAMP,
    is_active boolean DEFAULT TRUE
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    summary varchar(500) NOT NULL,
    price int NOT NULL,
    open_to_swaps boolean NOT NULL,
    category_id int NOT NULL,
    subcategory_id int NOT NULL,
    user_id int NOT NULL,
    date_posted date DEFAULT CURRENT_TIMESTAMP,
    availability varchar(50) NOT NULL,
    delivery varchar(150) NOT NULL,
    postage varchar(150) NOT NULL,
    collection varchar(150) NOT NULL,
    favourited_users varchar NOT NULL,
    location varchar(150) NOT NULL
);

DROP TABLE IF EXISTS interactions;

CREATE TABLE interactions (
    id serial PRIMARY KEY,
    user_id int NOT NULL,
    listing_id int NOT NULL,
    watching boolean NOT NULL,
    messaged boolean NOT NULL,
    purchased boolean NOT NULL
);