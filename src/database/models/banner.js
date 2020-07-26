"use strict";
module.exports = (sequelize, DataTypes) => {
    const Banner = sequelize.define(
        "Banner",
        {
            image: DataTypes.STRING,
            position: DataTypes.STRING,
            createdAt : {type : DataTypes.DATE, allowNull : true},
            updatedAt : {type : DataTypes.DATE, allowNull : true},
            deletedAt : {type : DataTypes.DATE, allowNull : true}
        }
    );
    return Banner;
};
