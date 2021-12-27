const supplierRoutes = require("./supplier");
const productRoutes = require("./product");

module.exports = (app) => {
  app.use(supplierRoutes);
  app.use(productRoutes);
};
