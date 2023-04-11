DROP TABLE IF EXISTS wax;
CREATE TABLE wax (
    ID SERIAL PRIMARY KEY,
    temperature INT,
    name VARCHAR(255),
    price INT
    );