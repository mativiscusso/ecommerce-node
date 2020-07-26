const { Product, Banner } = require("../database/models");

module.exports = {
    home: async (req, res, next) => {
        const productosHome = await Product.findAll({});

      
        const bannersTop = await Banner.findAll({ where: { position : 'top' } });
        const bannersCenter = await Banner.findAll({ where: { position : 'center' } });
        const bannersBottom = await Banner.findAll({ where: { position : 'bottom' } });

        res.render("index", {
            productosHome,
            bannersTop,
            bannersCenter,
            bannersBottom
        });
    },
    login: (req, res) => {
        res.render("users/login");
    },
    admin: (req, res) => {
        res.render("admin/index");
    },
    checkout: (req, res) => {
        res.render("checkout");
    },
    cart: (req, res) => {
        res.render("cart/index");
    },
};
