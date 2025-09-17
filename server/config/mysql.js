// Conexão entre MySQL e Express.
const mysql = require("mysql"); // Importando o modulo para dentro do codigo

// criando um objeto com as configurações para conectar ao MySQL.
const conn = mysql.createConnection({
    host: "localhost",
    user: "xxxxx",
    password: "xxxxx",
    database: "xxxxx"
});


// Conectando ao Banco e configurando um Tratamento de Erro. 
conn.connect((error) => {
    if (error)
    {
        console.log(`Error ao conectar com o MySQL ${error}`);
    }else
    {
        console.log("Conexão com Sucesso MySQL\n"); // Se não der erro nas credenciais, ele retorna.
    }
});


// exportação do objeto configurações MySQL. para dentro de app.js
module.exports = conn;
