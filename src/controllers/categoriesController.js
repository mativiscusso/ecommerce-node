const db = require("../database/models");
const { Op } = db.Sequelize;

module.exports = {
    index: function (req, res) {
        db.Category.findAll()
            .then((categorias) => {
                res.render("categorias/", { categorias });
            })
            .catch((error) => {
                res.send(error);
            });
    },
    // show:  {},
    create: async (req, res) => {
        let categorias = await db.Category.findAll();
        res.render("categorias/create", { categorias });
    },
    store: (req, res, next) => {
        const _body = req.body;

        db.Category.create(_body)
            .then((categoryStored) => {
                return res.redirect(`/categorias`);
            })
            .catch((error) => res.send(error));
    },
    edit: async (req, res) => {
        let id = req.params.id;
        let categoria = await db.Category.findByPk(id);
        return res.render("categorias/edit", { categoria });
    },
    update: (req, res) => {
        let categoria = req.body;
        
        db.Category.update(categoria, {
            where: {id: req.params.id}
        })
        .then(result => {
            return res.redirect('/categorias');
        })
        .catch(error => res.send(error));
    },
    destroy: async (req, res) => {
        await db.Category.destroy({ where: {id: req.params.id}});
        res.redirect('/categorias')
    }
}