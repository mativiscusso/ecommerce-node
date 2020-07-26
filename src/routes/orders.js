var express = require("express");
var router = express.Router();
const ordersController = require("../controllers/ordersController");

// Seguridad y permisos de rutas
const adminRoute = require ('../middlewares/adminRoute')

/* GET /orders Lista todas las ordenes */
router.get('/', ordersController.list)

/* POST /ordenes page. */
router.post("/checkout", ordersController.checkout);

/* POST /procesar-pago page. */
router.post("/procesar-pago", ordersController.payment);

// Detalle orden
router.get("/:id", ordersController.show);


module.exports = router;
