CREATE DATABASE tint_tracker;

CREATE TABLE palettes (
    palette_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color1 VARCHAR(7) NOT NULL,
    color2 VARCHAR(7) NOT NULL,
    color3 VARCHAR(7) NOT NULL,
    color4 VARCHAR(7) NOT NULL
);
