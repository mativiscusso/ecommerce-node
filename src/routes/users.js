var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

// Todos los usuarios
router.get("/", usersController.index);
// Vista formulario para loguear usuario
router.get("/login", usersController.login);
// Detalle Usuario 
router.get('/registro', usersController.create)
// Procesar formulario para crear usuario 
router.get("/:id", usersController.show);
// Vista formulario para crear usuario 
router.post('/', usersController.store)
// Vista formulario para editar usuario 
router.post('/:id/editar', usersController.edit)
// Procesar formulario para loguear usuario 
router.post('/login', usersController.procesarLogin)
// Procesar formulario para editar usuario 
router.put('/:id', usersController.update)
// Eliminar usuario 
router.delete('/:id', usersController.destroy)

module.exports = router;
