-- Migration: 001_initial_schema
-- Direction: DOWN
-- Created: 2026-05-20

-- Drop tables in reverse dependency order to respect foreign key constraints

DROP TABLE IF EXISTS combined_keywords;
DROP TABLE IF EXISTS keyword;
DROP TABLE IF EXISTS account;
