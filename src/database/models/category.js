module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            name: DataTypes.STRING,
            createdAt: { type: DataTypes.DATE, allowNull: true },
            updatedAt: { type: DataTypes.DATE, allowNull: true },
            deletedAt: { type: DataTypes.DATE, allowNull: true },
        },
        // Configuracion adicional
        {
            tabtleName: "categories",
        }
    );
    Category.associate = function (models) {
        // Defino la relacion 'Un producto pertenece a MUCHAS ordenes'
        Category.hasMany(models.Product, {
            as: "category", //product.category
        });
    };
    return Category;
};
