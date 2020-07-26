"use strict";
module.exports = (sequelize, DataTypes) => {
    const Filters = sequelize.define(
        "Filters",
        {
            name: DataTypes.STRING,
            categoryId: DataTypes.INTEGER,
            createdAt: { type: DataTypes.DATE, allowNull: true },
            updatedAt: { type: DataTypes.DATE, allowNull: true },
            deletedAt: { type: DataTypes.DATE, allowNull: true },
        },
        {}
    );
    Filters.associate = function (models) {
        // Defino la relacion 'Una subcategoria pertenece a una categoria'

    };
    return Filters;
};
