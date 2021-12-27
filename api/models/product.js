const Sequelize = require("sequelize");
const database = require("../config/database");

const columns = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  supplierId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: "suppliers", // Name of the created table
      key: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
};

const options = {
  freezeTableName: true,
  tableName: "products",
  timestamps: true,
  version: "version",
};

module.exports = database.define("products", columns, options);
