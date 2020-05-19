var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

// Todos los usuarios
router.get("/", userController.index);
// Detalle producto 
router.get("/:id/:categoria", userController.show);
// Vista formulario para crear producto 
router.get('/crear', userController.create)
// Procesar formulario para crear producto 
router.post('/', userController.create)
// Vista formulario para editar producto 
router.post('/:id/:categoria/editar', userController.edit)
// Procesar formulario para editar producto 
router.put('/:id/:categoria/', userController.update)
// Eliminar producto 
router.delete('/:id/:categoria/', userController.destroy)

module.exports = router;
