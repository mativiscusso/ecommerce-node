var express = require("express");
var router = express.Router();
const mainControllers = require("../controllers/mainController");

/* GET home page. */
router.get("/", mainControllers.home);



module.exports = router;
