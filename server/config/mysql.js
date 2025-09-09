// Conexão entre MySQL e Express.

const mysql = require("mysql"); // módulo do MySQL.

// criando um objeto com as configurações para conectar ao MySQL.
const conn = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "01000001",
    database: "admin"
});


// Conectando ao Banco se não houver Tratamento de Erro. 
conn.connect((error) => {
    if (error)
    {
        console.log(`Error ao conectar com o MySQL ${error}`);
    }else
    {
        console.log("Conexão com Sucesso MySQL\n");
    }
});


// exportação do objeto configurações MySQL. para dentro de app.js
module.exports = conn;