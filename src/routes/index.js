var express = require("express");
var router = express.Router();
const mainControllers = require("../controllers/mainController");

// Seguridad y permisos de rutas
const guestRoute = require ('../middlewares/guestRoute')
const adminRoute = require ('../middlewares/adminRoute')

/* GET home page. */
router.get("/", mainControllers.home);

/* LOGIN page. */
router.get("/login", guestRoute, mainControllers.login);

/* LOGIN page. */
router.get("/admin", adminRoute, mainControllers.admin);

/* GET Checkout page. */
router.get("/checkout", mainControllers.checkout);

/* GET Carrito page. */
router.get("/cart", mainControllers.cart);

module.exports = router;
