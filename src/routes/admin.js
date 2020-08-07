var express = require("express");
var router = express.Router();
const adminController = require("../controllers/adminController");

// Seguridad y permisos de rutas
const adminRoute = require ('../middlewares/adminRoute')

// Renderiza vista autenticacion Panel Admin
router.get("/", adminController.admin);

// Renderiza vista autenticacion Panel Admin
router.get("/dashboard", adminRoute, adminController.dashboard);

// Renderiza vista autenticacion Panel Admin
router.get("/logout", adminRoute, adminController.logoutAdmin);

// Eliminar categoria
router.post("/auth", adminController.authAdmin);


module.exports = router;
