var express = require("express");
var router = express.Router();
const productoControllers = require("../controllers/productoController");

/* GET home page. */
router.get("/:id/:categoria", productoControllers.detalleProducto);

module.exports = router;
