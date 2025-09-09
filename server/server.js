// Configurações do Servidor, põe pra rodar essa bagaça.

const app = require("./app"); // Importe a aplicação

// Aqui separamos o IP do Servidor por segurança e organização, assim fica mais dificil identificar quem é o IP e PORTA.
require("dotenv").config();

// acessando o .env e construindo um objeto.
const PORT = process.env.PORT;
const HOST = process.env.HOST;


// node ./server.js
app.listen(PORT, HOST, () => {
    console.clear();
    console.log("oOo...... Framework Express NodeJs ......oOo\n");
    console.log(`[ROTA]=> http://${HOST}:${PORT}/`);
    console.log(`[ROTA]=> http://${HOST}:${PORT}/login`);
});