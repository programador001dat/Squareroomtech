const Path = require("path");
const express = require("express");

const Router = express.Router(); // Express para router() funcionalidade para roteamento.

// Middleware, para cada GET, retorne o IP.
const simpleMiddleware = (request, response, next) => {
    const ip_request = request.headers["x-forwarded-for"] || request.socket.remoteAddress;
    console.log(`\n=> ${ip_request} <=`);
    next(); // Continua o fluxo.
};
Router.use(simpleMiddleware); // Use o Middleware dentro do roteamento.

// Configurando o redirecionamento do GET.
Router.get("/", (request, response) => {
    response.sendStatus = 200;  // Código de Sucesso para pagina!
    response.setHeader("Content-Type", "text/html"); // Tipo de cabeçalho HTML.
    response.sendFile(Path.join(__dirname, "../views", "home.html")); // Enviar arquivos da pasta views.
});

Router.get("/robots.txt", (request, response) => {
    response.sendStatus = 200;
    response.setHeader("Content-Type", "text/plain"); // Tipo de cabeçalho TEXTO.
    response.send("Robots.txt");
});




module.exports = Router;