var express = require("express");
var router = express.Router();
const mainControllers = require("../controllers/mainController");

/* GET home page. */
router.get("/", mainControllers.home);
/* GET LOGIN. */
router.get("/login", mainControllers.login);
/* GET REGISTRO. */
router.get("/registro", mainControllers.registro);

module.exports = router;
