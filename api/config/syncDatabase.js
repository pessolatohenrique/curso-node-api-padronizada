const models = [require("../models/supplier"), require("../models/product")];

async function createTables() {
  [...models].map(async (item) => {
    item
      .sync()
      .then(() => console.log(`${item} was created!`))
      .catch((error) => console.log("error", error));
  });
}

createTables();
