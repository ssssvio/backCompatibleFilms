-- Reiniciar a sequência para a tabela brand
SELECT setval('brand_id_seq', 1, false);

-- Reiniciar a sequência para a tabela models
SELECT setval('models_id_seq', 1, false);

-- Reiniciar a sequência para a tabela compatibleModels
SELECT setval('compatiblemodels_id_seq', 1, false);

DROP TABLE brand;
DROP TABLE models;
DROP TABLE compatibleModels;

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
    ('SAMSUNG'),
    ('IPHONE'),
    ('MOTOROLA'),
    ('LG'),
    ('XIAOMI'),
    ('REALME')

INSERT INTO models (name, brand_id) VALUES
    ('A12', 1),
    ('7', 2),
    ('7 PLUS', 2),
    ('X', 2),
    ('XR', 2),
    ('XS MAX', 2),
    ('A10S', 1),
    ('A11', 1),
    ('13 PRO MAX', 2),
    ('15 PRO', 2),
    ('14 PRO', 2),
    ('NOTE 10', 5),
    ('A01', 1),
    ('NOTE 12 PRO', 5),
    ('Poco C55', 6),
    ('NOTE 12', 5),
    ('NOTE 11', 5),
    ('12', 2),
    ('13', 2),
    ('A52', 1),
    ('G22', 3),
    ('G31', 3),
    ('A50', 1),
    ('12C', 5),
    ('G52', 3),
    ('A20', 1);
-- proximo n27
-- deixar so o nome sem a marca antes
-- deixar a pessoa escrever como quiser, quando passar pelo back end 
-- passar a req tudo pra maisculo e deixar todo banco de dado em MAIUSCULO

INSERT INTO compatiblemodels (models_id, compatible_models) VALUES
    (1, 'A13'),
    (1, 'A22'),
    (1, 'A02'),
    (1, 'A02S'),
    (1, 'A03'),
    (1, 'A03S'),
    (1, 'M12'),
    (1, 'M13'),
    (1, 'A32'),
    (1, 'M33'),
    (1, 'A23'),
    (1, 'A04E'),
    (1, 'A04S'),
    (1, 'A20S'),
    (1, 'A31'),
    (1, 'REDMI A1'),
    (1, 'REDMI A2'),
    (2, '8'),
    (2, 'SE'),
    (3, '8 PLUS'),
    (8, 'A71'),
    (8, 'G8'),
    (8, 'G8 POWER'),
    (8, 'ONE HYPER'),
    (8, 'ONE FUSION PLUS'),
    (8, 'NOTE 9'),
    (4, 'XS'),
    (4, '11 PRO'),
    (5, '11'),
    (6, '11 PRO MAX'),
    (7, 'A10'),
    (7, 'G7 PLUS'),
    (7, 'G8 PLUS'),
    (7, 'G8 PLAY'),
    (7, 'LG K22'),
    (7, 'G7'),
    (7, 'LG K40S'),
    (7, 'NOTE 8'),
    (9, '14 PLUS'),
    (10, '15'),
    (11, '14'),
    (12, 'NOTE 10S'),
    (12, 'POCO X3'),
    (12, 'POCO X3 GT'),
    (12, 'NOTE 9T'),
    (13, 'M01'),
    (14, 'POCO X5'),
    (14, 'POCO X5 PRO'),
    (15, 'POCO C55'),
    (15, 'POCO C53'),
    (15, 'POCO C35'),
    (16, 'NOTE 12S'),
    (17, 'NOTE 11S'),
    (18, '12 PRO'),
    (19, '13 PRO'),
    (19, '14'),
    (20, 'S20 FE'),
    (21, 'E32'),
    (22, 'G41'),
    (23, 'A30S'),
    (23, 'M31'),
    (24, '12A'),
    (24, '10C'),
    (25, 'G82'),
    (26, 'A30');