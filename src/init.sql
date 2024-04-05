CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    value INTEGER
);

INSERT INTO items (text, value) VALUES ('Example 1', 10), ('Example 2', 20), ('Example 3', 30);
