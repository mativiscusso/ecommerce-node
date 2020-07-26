var express = require("express");
var multer = require("multer");
const path = require("path");
var router = express.Router();

const productsController = require("../controllers/productsController");

// Seguridad y permisos de rutas
const adminRoute = require ('../middlewares/adminRoute')

// Configuracion libreria MULTER para subida de imagenes
var storage = multer.diskStorage({
    destination: path.resolve("public", "img", "productos"),
    filename: function (req, file, cb) {
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
var upload = multer({ storage });

// Listar todos los productos
router.get("/", productsController.index);
// Listar todos los productos en panel Admin
router.get("/all", adminRoute, productsController.all);
// Vista formulario para crear producto
router.get("/create", adminRoute, productsController.create);
// Buscar Productos
router.get("/search", productsController.search);
// Buscar Productos
router.get("/categoria/:category", productsController.filter);
// Detalle producto
router.get("/:id", productsController.show);
// Procesar formulario para crear producto
router.post("/", upload.single('image'), productsController.store);
// Vista formulario para editar producto
router.get("/:id/editar", productsController.edit);
// Procesar formulario para editar producto
router.put("/:id", upload.single('image'), productsController.update);
// Eliminar producto
router.delete("/:id", productsController.destroy);

module.exports = router;
