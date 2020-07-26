"use strict";
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define(
        "Item",
        {
            item: { type: DataTypes.STRING, allowNull: true },
            quantity: { type: DataTypes.INTEGER, allowNull: true },
            price: { type: DataTypes.DECIMAL, allowNull: true },
            orderId: { type: DataTypes.INTEGER },
        },
        // Configuracion adicional
        {
            timestamps: false,
        }
    );
    Item.associate = function (models) {
        // Defino la relacion Una orden pertenece a un usuario
        Item.belongsTo(models.Order, {
            as: "order", //Items.order
        });
    };
    return Item;
};
