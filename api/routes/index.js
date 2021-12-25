const supplierRoutes = require("./supplier");

module.exports = (app) => {
  app.use(supplierRoutes);
};
