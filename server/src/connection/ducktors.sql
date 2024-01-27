CREATE DATABASE ducktors
USE ducktors

CREATE TABLE usuarios(
    id_user int primary key identity,
    nick varchar(100) not null,
    email varchar(100) not null,
    senha varchar(100) not null,
    stat varchar(10) not null,
)

CREATE TABLE comunidade(
    id_comunidade int primary key identity,
    nome varchar(100) not null,
    stat varchar(10) not null,
)

CREATE TABLE postagem(
    id_postagem int primary key identity,
    id_autor varchar(100) not null,
    tipo varchar(100) not null,
    titulo varchar(100) not null,
    texto varchar(255) not null,
    img varchar(100) null,
    stat varchar(10) not null,
)