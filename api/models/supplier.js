const Sequelize = require("sequelize");
const database = require("../config/database");

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("ração", "brinquedos"),
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
  tableName: "suppliers",
  timestamps: true,
  version: "version",
};

module.exports = database.define("suppliers", columns, options);
