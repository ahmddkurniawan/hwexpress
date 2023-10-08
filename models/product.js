'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsToMany(model.category, {foreignKey: "product_id", through: models.productcategory})
      // define association here
    }
  }
  product.init({
    title: DataTypes.STRING,
    sku: DataTypes.STRING,
    color: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};