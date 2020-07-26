var express = require("express");
var multer = require("multer");
const path = require("path");
var router = express.Router();

const bannersControllers = require("../controllers/bannersController");

// Seguridad y permisos de rutas
const adminRoute = require ('../middlewares/adminRoute')

// Configuracion libreria MULTER para subida de imagenes
var storage = multer.diskStorage({
    destination: path.resolve("public", "img", "banners"),
    filename: function (req, file, cb) {
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
var upload = multer({ storage });

// Listar todos los productos
router.get("/", adminRoute, bannersControllers.index);

// Vista formulario para crear producto
router.get("/create", adminRoute, bannersControllers.create);

// Detalle producto
router.get("/:id", adminRoute, bannersControllers.show);

// Procesar formulario para crear producto
router.post("/", upload.single('image'), bannersControllers.store);

// Vista formulario para editar producto
//router.get("/:id/editar", bannersControllers.edit);

// Procesar formulario para editar producto
router.put("/:id", upload.single('image'), bannersControllers.update);

// Eliminar producto
router.delete("/:id", bannersControllers.destroy);

module.exports = router;