const db = require("../database/models");
const { Op } = db.Sequelize;
const bcrypt = require("bcrypt");

module.exports = {
    index: async (req, res) => {
        let users = await db.User.findAll();
        return res.render("users/", { users });
    },
    show: async (req, res) => {
        const user = await db.User.findByPk(req.params.id);
        return res.render("users/profile", { user });
    },
    create: (req, res) => {
        res.render("users/registro");
    },
    store: (req, res, next) => {
        const _body = req.body;
        // verifico si viene imagen y la asigno al body
        _body.image = req.file ? req.file.filename : "";

        //encripto la contraseña
        let passHash = bcrypt.hashSync(_body.password, 10);
        _body.password = passHash;

        //armo el objeto usuario con los datos del formulario
        let user = {
            ..._body,
        };

        //guardo el nuevo usuario dentro de la variable USERS que tiene todos los usuarios
        db.User.create(user)
            .then((user) => {
                //redirijo
                return res.render("users/profile", { user });
            })
            .catch((err) => res.send(err));
    },
    edit: async (req, res) => {
        const user = await db.User.findByPk(req.params.id);
        return res.render("users/edit", { user });
    },
    update: (req, res) => {
        const user = req.body;

        user.image = req.file ? req.file.filename : req.body.oldAvatar;

        db.User.update(user, {
            where: { id: req.params.id },
        })
            .then((result) => {
                return res.redirect(`/users/${req.params.id}`);
            })
            .catch((error) => res.send(error));
    },
    destroy: async (req, res) => {
        await db.User.destroy({ where: { id: req.params.id } });
        res.redirect(`/users`);
    },
    procesarLogin: (req, res) => {
        //busco el usuario en la base de datos por el atributo unico e irrepetible
        db.User.findOne({ where: { email: req.body.user } }).then(
            async (user) => {
                if (!user) {
                    res.redirect("/login");
                } else if (
                    !(await bcrypt.compareSync(
                        req.body.password,
                        user.password
                    ))
                ) {
                    res.redirect("/login");
                } else {
                    req.session.user = user.dataValues;
                    // Recordamos al usuario por 3 meses => msegs  segs  mins  hs   días
                    res.cookie("usuario", user.dataValues, {
                        maxAge: 1000 * 60 * 60 * 24 * 90,
                    });
                    res.redirect("/");
                }
            }
        );
    },
    logout: (req, res) => {
        // Destruimos la sesión
        req.session.destroy();
        // Destruimos la cookie de recordar
        res.cookie("usuario", null, { maxAge: -1 });
        res.redirect("/");
    },
};
