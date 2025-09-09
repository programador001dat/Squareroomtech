// Preparando a QUERY para fazer a buscar no Banco de Dados.

const mysql = require("../config/mysql"); // chamando as configurações do MySQL

const User = {
    findByUsername: (username, callback) => {
        const query = "SELECT * FROM user WHERE username = ?"; // Fazer uma QUERY
        mysql.query(query, [username], callback);
    }
};


// Exportando para app.js
module.exports = User;