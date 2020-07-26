module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        userId: { type: DataTypes.INTEGER, allowNull: true },
        totalPrice : DataTypes.DECIMAL,
        shipping: DataTypes.STRING,
        payment: { type: DataTypes.BOOLEAN, allowNull: true },
        createdAt: { type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true },
        deletedAt: { type: DataTypes.DATE, allowNull: true },
    });
    Order.associate = function (models) {
        // Defino la relacion Una orden pertenece a un usuario
        Order.hasMany(models.Item, {
            as: "items", //order.items
        });
        Order.belongsTo(models.User, {
            as: "usuario", //order.user
            foreignKey: "userId"
        });
    };

    return Order;
};
