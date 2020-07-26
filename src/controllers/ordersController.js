const db = require("../database/models");

module.exports = {
    list : async (req,res) => {
        let orders = await db.Order.findAll({ include: ["usuario"] })
        return res.render('orders/index', { orders })
    },
    checkout: async (req, res) => {
        let _body = req.body;

        let items = []
        _body.items.forEach(i => {
            let data = {item: i.name, quantity : i.quantity, price : i.price}
            items.push(data)
        })

        let order = {
            userId: req.session.user.id,
            totalPrice: _body.totalPrice,
            shipping: "Envio",
            payment: true,
        };

        let orderCreated = await db.Order.create(order);

        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                const element = items[key];
                element.orderId = orderCreated.id;
            }
        }

        await db.Item.bulkCreate(items);
        
        res.status(200).json("ok");
    },
    show: async (req, res) => {
        let id = req.params.id;
        let order = await db.Order.findByPk(id, { include: ["usuario"] });
        let items = await db.Item.findAll(
            { where: { orderId: req.params.id } },
            { include: ["order"] }
        );
        res.render("orders/show", { order, items });
    },
};
