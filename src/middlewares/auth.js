module.exports = (req, res, next) => {
  res.locals.user = false;

  if (req.session.user) {
    res.locals.user = req.session.user;
    return next();
  } else if (req.cookies.usuario) {
    // Si esta la cookie con el usuario se lo pasamos a la sesión a la vista
    req.session.user = req.cookies.usuario;
    res.locals.user = req.cookies.usuario;
  }
  next();
};
