CREATE TABLE brand (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand_id INTEGER REFERENCES brand(id),
    UNIQUE (name, brand_id)
);

CREATE TABLE compatibleModels (
    id SERIAL PRIMARY KEY,
    models_id INTEGER REFERENCES models(id),
    compatible_models VARCHAR(255) NOT NULL
);

INSERT INTO brand (name) VALUES
    ('Samsung'),
    ('iPhone'),
    ('Motorola'),
    ('LG'),
    ('Xiaomi');

INSERT INTO models (name, brand_id) VALUES
1-    ('A12', 1),
2-    ('iPhone 7', 2),
3-    ('iPhone 7 Plus', 2),
4-    ('iPhone X', 2),
5-    ('iPhone Xr', 2),
6-    ('iPhone Xs Max', 2),
7-    ('A10s', 1),
8-    ('A11', 1),
9-    ('iPhone 15 Pro Max', 2),
10-   ('iPhone 15 Pro', 2),

INSERT INTO compatiblemodels (models_id, compatible_models) VALUES
    (1, 'A13'),
    (1, 'A22'),
    (1, 'A02'),
    (1, 'A02s'),
    (1, 'A03'),
    (1, 'A03s'),
    (1, 'M12'),
    (2, 'iPhone 8'),
    (2, 'iPhone SE'),
    (3, 'iPhone 8 Plus'),
    (8, 'A71'),
    (8, 'Moto G8'),
    (8, 'Moto G8 Power'),
    (8, 'Moto One Hyper'),
    (8, 'Moto One Fusion Plus'),
    (8, 'Note 9'),
    (4, 'iPhone Xs'),
    (4, 'iPhone 11 Pro'),
    (5, 'iPhone 11'),
    (6, 'iPhone 11 Pro Max'),
    (7, 'A10'),
    (7, 'Moto G7 Plus'),
    (7, 'Moto G8 Plus'),
    (7, 'Moto G8 Play'),
    (7, 'LG K22'),
    (7, 'Moto G7'),
    (7, 'LG K40s'),
    (7, 'Note 8'),
    (9, 'iPhone 15 Plus'),