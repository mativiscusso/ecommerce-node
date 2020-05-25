var express = require("express");
var router = express.Router();
const productosControllers = require("../controllers/productosController");

// Listar todos los productos
router.get("/", productosControllers.index);
// Detalle producto 
router.get("/:id", productosControllers.show);
// Vista formulario para crear producto 
router.get('/create', productosControllers.create)
// Procesar formulario para crear producto 
router.post('/', productosControllers.store)
// Vista formulario para editar producto 
router.get('/:id/editar', productosControllers.edit)
// Procesar formulario para editar producto 
router.put('/:id', productosControllers.update)
// Eliminar producto 
router.delete('/:id', productosControllers.destroy)

module.exports = router;

