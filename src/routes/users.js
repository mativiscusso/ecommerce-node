var express = require("express");
const multer = require("multer");
const path = require("path");

var router = express.Router();

const usersController = require("../controllers/usersController");
const pathUpload = path.resolve("public", "img", "avatars");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathUpload);
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

var upload = multer({ storage: storage });

// Listar los usuarios
router.get("/", usersController.index);
// Vista formulario para loguear usuario
router.get("/login", usersController.login);
// Vista formulario para registrar usuario
router.get("/registro", usersController.create);
// Procesar deslogueo del usuario
router.get("/logout", usersController.logout);
// Vista detalle de un usuario
router.get("/:id", usersController.show);
// Procesar Formulario Registro
router.post("/", upload.any(), usersController.store);
// Vista formulario para editar usuario
router.post("/:id/editar", usersController.edit);
// Procesar formulario para loguear usuario
router.post("/login", usersController.procesarLogin);
// Procesar formulario para editar usuario
router.put("/:id", usersController.update);
// Eliminar usuario
router.delete("/:id", usersController.destroy);

module.exports = router;
