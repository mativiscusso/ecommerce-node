module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        // Nombre del modelo que usare en el Controlador
        "User",
        // Definicion de columnas de la tabla
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: { type: DataTypes.STRING, unique: true },
            password: DataTypes.STRING,
            isAdmin: { type: DataTypes.BOOLEAN, allowNull: true },
            image: { type: DataTypes.STRING, allowNull: true },
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            zipCode: DataTypes.INTEGER,
            gender: { type: DataTypes.STRING, allowNull: true },
            phone: { type: DataTypes.INTEGER, allowNull: true },
            address: DataTypes.STRING,
            createdAt: { type: DataTypes.DATE, allowNull: true },
            updatedAt: { type: DataTypes.DATE, allowNull: true },
            deletedAt: { type: DataTypes.DATE, allowNull: true },
        }
    );
    User.associate = function (models) {
        // Defino la relacion 'Un usuario tiene muchas ordenes'
        User.hasMany(models.Order, {
            as: "orders", //user.orders
            foreignKey: "userId"
        });
    };

    return User;
};
