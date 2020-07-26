module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        // Nombre del modelo que usare en el Controlador
        "Product",
        // Definicion de columnas de la tabla
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            categoryId: DataTypes.INTEGER,
            price: { type: DataTypes.NUMBER, allowNull: true },
            discount: { type: DataTypes.INTEGER, allowNull: true },
            stock: { type: DataTypes.INTEGER, allowNull: true },
            inOffer: { type: DataTypes.BOOLEAN, defaultValue: false },
            image: DataTypes.STRING,
            sku: { type: DataTypes.INTEGER, allowNull: true },
            createdAt: { type: DataTypes.DATE, allowNull: true },
            updatedAt: { type: DataTypes.DATE, allowNull: true },
            deletedAt: { type: DataTypes.DATE, allowNull: true },
        },
        // Configuraciones adicionales
        {}
    );
    Product.associate = function (models) {
        // Defino la relacion 'Un producto pertenece a una categoria'
        Product.belongsTo(models.Category, {
            as: "category", //product.category traera la categoria asociada a ese producto
        });
    };
    return Product;
};
