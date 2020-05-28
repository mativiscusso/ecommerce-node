module.exports = (req, res, next) => {
    res.locals.user = false;

    if (req.session.user) {
        res.locals.user = req.session.user;
    }

    next();
};
