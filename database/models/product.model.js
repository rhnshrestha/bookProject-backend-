const { DataTypes } = require("sequelize");
const { sequelize } = require("../connect");

const productModel = (sequelize, DataTypes)=>{
    const product = sequelize.define("product", {
        productName : {
            type : DataTypes.STRING
        },
        productPrice : {
            type : DataTypes.FLOAT
        },
        productImage : {
            type : DataTypes.STRING
        }

    })
    return product;
}
module.exports = productModel