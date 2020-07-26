var express = require("express");
const multer = require("multer");
const path = require("path");
var router = express.Router();

const usersController = require("../controllers/usersController");
const pathUpload = path.resolve("public", "img", "avatars");

// Seguridad y permisos de rutas
const guestRoute = require ('../middlewares/guestRoute')
const adminRoute = require ('../middlewares/adminRoute')
const userRoute = require ('../middlewares/userRoute')

// Configuracion libreria MULTER para subida de imagenes
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
router.get("/", adminRoute, usersController.index);
// Vista formulario para registrar usuario
router.get("/registro", guestRoute, usersController.create);
// Procesar deslogueo del usuario
router.get("/logout", userRoute, usersController.logout);
// Vista detalle de un usuario
router.get("/:id", userRoute, usersController.show);
// Procesar Formulario Registro
router.post("/", upload.single('image'), usersController.store);
// Vista formulario para editar usuario
router.post("/:id/editar", usersController.edit);
// Procesar formulario para loguear usuario
router.post("/login", usersController.procesarLogin);
// Procesar formulario para editar usuario
router.put("/:id", userRoute, usersController.update);
// Eliminar usuario
router.delete("/:id", userRoute, usersController.destroy);

module.exports = router;
