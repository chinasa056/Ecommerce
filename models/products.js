// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('ecommerce', 'root', 'Acha105#', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// class Product extends Model {}

// // Define the Product model
// Product.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: Sequelize.UUIDV4, // Automatically generate a UUID
//       allowNull: false,
//       primaryKey: true,
//     },
//     storeId: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       references: {
//         model: 'stores', // Refers to the Store model
//         key: 'id', // The key in the Store model that this foreign key references
//       },
//     },
//     productName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     productQTY: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     productAmount: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize, // Pass the sequelize instance
//     modelName: 'Product', // Define the model name
//     tableName: 'products', // Name of the table in the database
//     timestamps: true, // Automatically adds createdAt and updatedAt columns
//   }
// );

// // Define associations (if any)
// Product.associate = (models) => {
//   Product.belongsTo(models.Store, { foreignKey: 'storeId', as: 'store' });
// };
// module.exports = Product;


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      
  products.associate = (models) =>{
    products.belongsTo(models.stores,{foreignKey:"storeId",as:"stores"})
  }
      // define association here
    }
  }
  products.init({
    storeId: DataTypes.UUID,
    productName: DataTypes.STRING,
    productQty: DataTypes.INTEGER,
    productAmount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};