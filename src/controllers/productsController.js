const db = require("../database/models");
const { Op } = db.Sequelize;

module.exports = {
    // CRUD
    index: async (req, res) => {
        let categorias = await db.Category.findAll();
        let productos = await db.Product.findAll({
            include: ["category"],
            order: [
                ["id", "DESC"],
            ],
            limit: 20
        });
        return res.render("productos/", { productos, categorias });
    },
    show: function (req, res) {
        let id = req.params.id;
        db.Product.findByPk(id, {
            include: ["category"],
        })
            .then((producto) => {
                if (producto) {
                    res.render("productos/show", { detalleProducto: producto });
                } else {
                    res.send("error");
                }
            })
            .catch((error) => {
                res.send(error);
            });
    },
    create: async (req, res) => {
        let categorias = await db.Category.findAll();
        res.render("productos/create", { categorias });
        //res.status(200).json(categorias)
    },
    store: (req, res, next) => {
        const _body = req.body;
        _body.image = req.file ? req.file.filename : "";

        db.Product.create(_body)
            .then((productStored) => {
                return res.redirect(`productos/all`);
            })
            .catch((error) => res.send(error));
    },
    edit: async (req, res) => {
        let categorias = await db.Category.findAll();
        let id = req.params.id;
        let producto = await db.Product.findByPk(id, { include: ["category"] });
        return res.render("productos/edit", { producto, categorias });
    },
    update: (req, res) => {
        let product = req.body;

        product.image = req.file ? req.file.filename : req.body.oldImage;

        db.Product.update(product, {
            where: { id: req.params.id },
        })
            .then((result) => {
                return res.redirect(`/productos/${req.params.id}`);
            })
            .catch((error) => res.send(error));
    },
    destroy: async (req, res) => {
        await db.Product.destroy({ where: { id: req.params.id } });
        res.redirect(`/productos/all`);
    },
    // OTRAS FUNCIONALIDADES

    // Lista los productos en panel admin
    all: function (req, res) {
        db.Product.findAll({
            include: ["category"],
        })
            .then((productos) => {
                res.render("productos/list", { productos });
            })
            .catch((error) => {
                res.send(error);
            });
    },
    // Busqueda barra header
    search: async (req, res) => {
        let categorias = await db.Category.findAll();
        db.Product.findAll({
            include: ["category"],
            where: { name: { [Op.like]: `%${req.query.q}%` } },
        })
            .then((productSearch) => {
                return res.render("productos", { productSearch, categorias });
            })
            .catch((err) => {
                res.send(err);
            });
    },
    // Filtrado por categorias
    filter: async (req, res) => {
        let categorias = await db.Category.findAll();
        let productFilter = await db.Product.findAll({
            include: ["category"],
            where: { categoryId: req.params.category },
        });
        return res.render("productos/filtrados", { productFilter, categorias });
    },
};
