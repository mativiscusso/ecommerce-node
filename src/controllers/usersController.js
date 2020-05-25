const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const pathUsersDB = path.resolve("src", "data", "usersDataBase.json");

let users = JSON.parse(fs.readFileSync(pathUsersDB, "utf-8"));

//* Generar ID
const generarID = () => Math.floor(Math.random() * 9999);

module.exports = {
  index: function (req, res) {},
  show: function (req, res) {
    res.send("estoy en procesarlogin");
  },
  create: (req, res) => {
    res.render("users/registro");
  },
  store: (req, res) => {
    //encripto la contraseña
    let passHash = bcrypt.hashSync(req.body.pass, 10);
    //armo el objeto usuario con los datos del formulario y genero un ID random
    let user = {
      id: generarID(),
      ...req.body,
      pass: passHash,
    };

    users.push(user);

    fs.writeFileSync(pathUsersDB, JSON.stringify(users, null, " "));

    res.redirect("/");
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
  login: (req, res) => {
    res.render("users/login");
  },
  procesarLogin: (req, res) => {},
};
