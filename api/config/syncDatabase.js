const SupplierTable = require("../models/supplier");

SupplierTable.sync()
  .then(() => console.log("Supplier was created!"))
  .catch((error) => console.log("error", error));
