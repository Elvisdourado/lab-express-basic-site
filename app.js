// Não esquecer de criar o script "start" no arquivo package.json!!!

const path = require("path");
// "import express from 'express'" equivale à
const express = require("express");
const router = require("express").Router();

// 1. Instanciar um novo servidor web

const app = express();

// Configurar a pasta public para servir conteúdo estático
app.use(express.static("public"));

// 2. Configurar quais rotas vamos escutar no servidor web, e o que vamos responder às requisições delas

// Todo listener de rota recebe 2 parâmetros principais: uma string determinando qual rota observar, e uma função callback para executar quando acontece a requisição nessa rota
// A callback dos listeners sempre recebe 2 parâmetros: request e response
router.get("/", (request, response) => {
  console.log("GET request on /hello route");
  return response.sendFile(path.join(__dirname, "/views/home.html"));
});

router.get("/about", (request, response) => {
  console.log("GET request on /home route");
  // __dirname é uma superglobal, uma variável que sempre está disponível em qualquer escopo do node, e aponta para a pasta do script atual
  console.log(__dirname);
  return response.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get("/photos", (request, response) => {
  console.log("GET request on /cat route");
  return response.sendFile(path.join(__dirname, "/views/photos.html"));
});

router.get("/works", (request, response) => {
  console.log("GET request on /cat route");
  return response.sendFile(path.join(__dirname, "/views/works.html"));
});

// 3. Comunicar ao servidor para ele usar o roteador configurado

app.use("/", router);

// 4. Subir o servidor web para escutar requisições HTTP em uma porta específica

app.listen(3000, () => console.log("Server is up and running at port 3000"));
