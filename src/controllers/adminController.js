const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

usersPath = path.join(__dirname, "../database/admin/userAdmin.json");

// Helpers
function getUsers() {
    let userContent = fs.readFileSync(usersPath, "utf8");
    return userContent != "" ? JSON.parse(userContent) : [];
}
function getUser(id) {
    let usuarios = getUsers();
    return usuarios.find((user) => user.id == id);
}
function getUserByEmail(email) {
    let usuarios = getUsers();
    return usuarios.find((user) => user.email == email);
}

function generateId() {
    let usuarios = getUsers();
    if (usuarios.length) {
        let ids = usuarios.map((user) => user.id); // [1,2,3,4,5....]
        return Math.max(...ids) + 1; // Math.max(1,2,3) -> 3 + 1 -> 4
    } else {
        return 1;
    }
}
function guardarUsuario(usuario) {
    let usuarios = getUsers();
    usuarios.push(usuario);
    fs.writeFileSync(usersPath, JSON.stringify(usuarios, null, " "));
}
// ---- //

module.exports = {
    admin: (req, res) => {
        res.render("admin/login");
    },
    dashboard: (req, res) => {
        res.render("admin/index");
    },
    authAdmin: (req, res) => {
        let usuario = getUserByEmail(req.body.email);

        if (usuario != undefined) {
            if (bcrypt.compareSync(req.body.pass, usuario.pass)) {
                req.session.admin = usuario.email;
                if (req.body.remember) {
                    // Recordamos al usuario por 3 meses => msegs  segs  mins  hs   días
                    res.cookie("admin", usuario.email, {
                        maxAge: 1000 * 60 * 60 * 24 * 90,
                    });
                }
                return res.redirect("/admin/dashboard");
            } else {
                return res.send("La contraseña no es correcta");
            }
        } else {
            res.redirect("/admin");
        }
    },
    logoutAdmin: (req, res) => {
        // Destruimos la sesión
        req.session.destroy();
        // Destruimos la cookie de recordar
        res.cookie("admin", null, { maxAge: -1 });
        res.redirect("/");
    },
};
