var express = require("express");
var router = express.Router();
const productoControllers = require("../controllers/productoController");

// Listar todos los productos
router.get("/", productoControllers.index);
// Detalle producto 
router.get("/:id/:categoria", productoControllers.show);
// Vista formulario para crear producto 
router.get('/crear', productoControllers.create)
// Procesar formulario para crear producto 
router.post('/', productoControllers.create)
// Vista formulario para editar producto 
router.post('/:id/:categoria/editar', productoControllers.edit)
// Procesar formulario para editar producto 
router.put('/:id/:categoria/', productoControllers.update)
// Eliminar producto 
router.delete('/:id/:categoria/', productoControllers.destroy)

module.exports = router;

