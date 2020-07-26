var express = require("express");
var router = express.Router();
const categoriesController = require("../controllers/categoriesController");

// Seguridad y permisos de rutas
const adminRoute = require ('../middlewares/adminRoute')

// Listar todos los categorias
router.get("/", adminRoute, categoriesController.index);
// Vista formulario para crear categoria
router.get("/create", adminRoute, categoriesController.create);

// Detalle categoria
// router.get("/:id", adminRoute, categoriesController.show);

// Procesar formulario para crear categoria
router.post("/", categoriesController.store);
// Vista formulario para editar categoria
router.get("/:id/editar", adminRoute, categoriesController.edit);
// Procesar formulario para editar categoria
router.put("/:id", adminRoute, categoriesController.update);
// Eliminar categoria
router.delete("/:id", adminRoute, categoriesController.destroy);


module.exports = router;
