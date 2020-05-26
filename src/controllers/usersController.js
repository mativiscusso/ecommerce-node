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
    store: (req, res, next) => {
        //encripto la contraseña
        let passHash = bcrypt.hashSync(req.body.pass, 10);
        //armo el objeto usuario con los datos del formulario y genero un ID random
        let user = {
            id: generarID(),
            ...req.body,
            pass: passHash,
            avatar : req.files[0].filename
        };
        //guardo el nuevo usuario dentro de la variable USERS que tiene todos los usuarios
        users.push(user);
        //escribo los usuarios en el archivo de base de datos
        fs.writeFileSync(pathUsersDB, JSON.stringify(users, null, " "));
        //redirijo
        res.render("users/profile", { user });
    },
    edit: (req, res) => {},
    update: (req, res) => {},
    destroy: (req, res) => {},
    login: (req, res) => {
        res.render("users/login");
    },
    procesarLogin: (req, res) => {
        let userEnviado = req.body.user
        let passEnviada = req.body.pass
        //busco el usuario en la base de datos por el atributo unico e irrepetible
        let user = users.find((u) => u.user == userEnviado);
        console.log(userEnviado, passEnviada);
        
        //si existe, hago la validacion de password
        if (user) {
            let check = bcrypt.compareSync(passEnviada, user.pass)
            if(check){
                res.redirect('/')
            }
        } else {
            res.redirect('/users/registro')
        }
        //si no existe lo redirijo a registracion
    },
};
