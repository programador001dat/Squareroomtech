

const authController = require("../controllers/authControllers");  // Importando controladores.

const express = require("express");
const router = express.Router();

// Definindo a ROTA do GET
router.get("/login", authController.loginPage);
// Definindo a ROTA do POST
router.post("/login", authController.login);


// Exporta para app;
module.exports = router;