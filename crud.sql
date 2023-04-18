CREATE DATABASE crud;
USE crud;
CREATE TABLE clientes (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    idade int NOT NULL,
    uf VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    produto VARCHAR(100),
    quantidade INT,
    valor_unitario DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

