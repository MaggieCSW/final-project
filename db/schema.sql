DROP DATABASE IF EXISTS carryalls_db;
CREATE DATABASE carryalls_db;
USE carryalls_db;

CREATE TABLE brand(
    brand_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    brand VARCHAR(40) NOT NULL,
    CONSTRAINT pk_brand PRIMARY KEY (brand_id)
);

CREATE TABLE category(
    category_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    category VARCHAR(40) NOT NULL,
    CONSTRAINT pk_category PRIMARY KEY (category_id)
);

CREATE TABLE product(
    product_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(40) NOT NULL,
    brand_id TINYINT UNSIGNED NOT NULL,
    product_image VARCHAR(40),
    price FLOAT(6, 2) NOT NULL,
    description TEXT,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_product PRIMARY KEY (product_id),
    CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brand (brand_id)
);

DROP TABLE category;

ALTER TABLE product ADD column category enum('tote', 'handbag', 'crossbody', 'clutch');


