// Configuração do Servidor em Si. Express

const Path = require("path"); // módulo manipulação de caminhos e renderização.
const bodyParser = require("body-parser"); // módulo receptor via POST
const express = require("express"); // Framework minimalista Express 5.1

// Instancia da Aplicação
const app = express();

// Servir arquivos estáticos da pasta public, .css/imagem/videos
app.use(express.static(Path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));


// Exportação das configurações do Servidor. para dentro de app.js
module.exports = app;