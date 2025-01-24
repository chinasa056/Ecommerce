  const { Sequelize, DataTypes, Model } = require('sequelize');
  const sequelize = new Sequelize('ecommerce', 'root', 'Acha105#', {
    host: 'localhost',
    dialect: 'mysql' 
  });


  class Store extends Model {}

  // Define the Store model
  Store.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Automatically generate a UUID
        allowNull: false,
        primaryKey: true,
      },
      storeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize, // Pass the sequelize instance
      modelName: 'Store', // Define the model name
      tableName: 'stores', // Name of the table in the database
      timestamps: true, // Automatically adds createdAt and updatedAt columns
    }
  );

  // Define associations (if any)
  Store.associate = (models) => {
    Store.hasOne(models.Product, { foreignKey: 'storeId', as: 'products' });
  };

  module.exports = Store;
