CREATE DATABASE facul;
USE facul;
CREATE TABLE aluno (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    idade int NOT NULL
);
CREATE TABLE curso (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(75) NOT NULL
);
CREATE TABLE disciplina(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    curso_id INT,
    FOREIGN KEY curso_id REFERENCES curso(id)
);
CREATE TABLE matricula(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES aluno(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplina(id)
);
