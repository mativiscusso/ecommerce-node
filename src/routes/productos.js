var express = require("express");
var multer = require("multer");
const path = require("path");

var router = express.Router();

const productosControllers = require("../controllers/productosController");
const pathUpload = path.resolve("public", "img", "productos");

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

// Listar todos los productos
router.get("/", productosControllers.index);
// Vista formulario para crear producto
router.get("/create", productosControllers.create);
// Detalle producto
router.get("/:id", productosControllers.show);
// Procesar formulario para crear producto
router.post("/", upload.any(), productosControllers.store);
// Vista formulario para editar producto
router.get("/:id/editar", productosControllers.edit);
// Procesar formulario para editar producto
router.put("/:id", productosControllers.update);
// Eliminar producto
router.delete("/:id", productosControllers.destroy);

module.exports = router;
