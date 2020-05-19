var express = require("express");
var router = express.Router();
const adminControllers = require("../controllers/adminController");

/* GET home page. */
router.get("/", adminControllers.index);

module.exports = router;