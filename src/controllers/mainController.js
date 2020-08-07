const { Product, Banner } = require("../database/models");

// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
    sandbox: true,
    access_token:
        "TEST-5883773942845862-062518-c2399b9abe29d3c725aa4049dad03364-153866039",
  });


module.exports = {
    home: async (req, res, next) => {
        const productosHome = await Product.findAll({});

        const bannersTop = await Banner.findAll({ where: { position: "top" } });
        const bannersCenter = await Banner.findAll({
            where: { position: "center" },
        });
        const bannersBottom = await Banner.findAll({
            where: { position: "bottom" },
        });

        res.render("index", {
            productosHome,
            bannersTop,
            bannersCenter,
            bannersBottom,
        });
    },
    login: (req, res) => {
        res.render("users/login");
    },
    checkout: (req, res) => {
        let itemsCompra = req.session.itemsCompra

        let items = [];
        itemsCompra.forEach((i) => {
            let data = { title: i.name, quantity: i.quantity, unit_price: i.price };
            items.push(data);
        });
        // Crea un objeto de preferencia
        let preference = {
            items,
            back_urls: {
                "success": "http://localhost:3000/",
                "failure": "http://localhost:3000/cart",
                "pending": "http://localhost:3000/checkout"
            },
            auto_return: "approved",
        };
        
        mercadopago.preferences
            .create(preference)
            .then(function (response) {
                console.log(response.body.init_point);
                // Este valor reemplazará el string "$$init_point$$" en tu HTML
                let init_point = response.body.init_point;
                res.render("checkout/index", { init_point });
            })
            .catch(function (error) {
                console.log(error);
            });


    },
    cart: (req, res) => {
        res.render("cart/index");
    },
};
