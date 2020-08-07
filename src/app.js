var createError = require("http-errors");
var express = require("express");
var path = require("path");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");
var auth = require("./middlewares/auth");



var app = express();

// Configuracion motor de vista EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Seguridad del sistema & Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "expecto patronum",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(auth);
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));

//Sistema de ruteo
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let productsRouter = require("./routes/products");
let ordersRouter = require("./routes/orders");
let categoriesRouter = require("./routes/categories");
let bannersRouter = require("./routes/banners");
let adminRouter = require("./routes/admin");
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/productos", productsRouter);
app.use("/categorias", categoriesRouter);
app.use("/orders", ordersRouter);
app.use("/banners", bannersRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
