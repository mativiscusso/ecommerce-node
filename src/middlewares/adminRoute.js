module.exports = (req, res, next) => {
    if (req.session.admin) {
        return next();
    } else if (req.cookies.usuario) {
        // Si esta la cookie con el usuario se lo pasamos a la sesión a la vista
        req.session.admin = req.cookies.admin;
    } else {
        res.redirect("/admin");
    }
};
