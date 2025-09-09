// Este é o codigo da Aplicação.

const app = require("./config/express"); // Importa Express
const home = require("./routes/index"); // Importa roteamento
const authRoutes = require("./routes/authRoutes"); // Importa o o autenticador

// ROTA RAIZ. 
app.use("/", home);

// Use o autenticador dentro da aplicação.
app.use(authRoutes);

// ROTA admin.
app.use("/login", authRoutes);


// Exporte para server.js
module.exports = app;