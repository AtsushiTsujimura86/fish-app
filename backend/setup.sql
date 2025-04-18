CREATE DATABASE fishdb;
USE fishdb;

CREATE TABLE fish (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    head_color VARCHAR(50) NOT NULL,
    body_color VARCHAR(50) NOT NULL,
    fin_color VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);