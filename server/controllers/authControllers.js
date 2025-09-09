// User: um modelo que define a estrutura dos dados de um usuario no Banco.
const User = require("../models/userModels.js"); // Importando Depêndencias
const path = require("path");


// Criação do controlador: authController função responsável por enviar o arquivo
// para o cliente Navegador.

const authController = {
    loginPage: (request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type","text/html"); // Tipo de cabeçalho HTML
        response.sendFile(path.join(__dirname, "../views", "logon.html")); // Enviar pagina login
    },

// Função: login para autenticação de usuario.
// req.body vai pegar os dados via POST username e password.
// método findByUsername do Models User para fazer a verificação com o DB.
    login: (request, response) => {
        const { username, password } = request.body;

        User.findByUsername(username, (error, result) => {
            if (error)
            {
                console.log(error);
                return response.status(500).send("<h1>Erro no servidor</h1>")
            }

            if (result.length === 0)
            {
                return response.status(401).send("<h1>Usuario não encontrado</h1>")
            }

            const auth = result[0];
            if (username === auth.username && password === auth.password)
            {
                return response.json({
                    message: "usuario administrador",
                    user: auth 
                });
            }

            else
            {
                return response.status(401).send("<h1>Algo está inválido</h1>");
            }

        });

    }
    
}



// Exportando.
module.exports = authController;