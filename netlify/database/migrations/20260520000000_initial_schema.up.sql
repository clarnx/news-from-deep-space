-- Migration: 001_initial_schema
-- Direction: UP
-- Created: 2026-05-20

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -----------------------------------------------------
-- Table: keyword
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS keyword (
    id       UUID         DEFAULT uuid_generate_v4() PRIMARY KEY,
    keyword  VARCHAR(100) NOT NULL,
    synonyms TEXT         NOT NULL
);

-- -----------------------------------------------------
-- Table: combined_keywords
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS combined_keywords (
    id               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    fk_keyword1      UUID NOT NULL,
    fk_keyword2      UUID NOT NULL,
    type             TEXT NOT NULL,
    link             TEXT NOT NULL,
    complex_api_type TEXT,
    complex_link     TEXT,
    key              TEXT,

    CONSTRAINT fk_keyword1
        FOREIGN KEY (fk_keyword1)
        REFERENCES keyword (id)
        ON DELETE CASCADE,

    CONSTRAINT fk_keyword2
        FOREIGN KEY (fk_keyword2)
        REFERENCES keyword (id)
        ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table: account
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS account (
    id       UUID         DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(40)  NOT NULL,
    password TEXT         NOT NULL,
    streak   INT
);
