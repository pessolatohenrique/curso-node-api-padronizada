const { Router } = require("express");
const model = require("../models/product");

const router = Router();

router.route("/supplier/:id/products").get(async (req, res) => {
  const result = await model.findAll({
    where: {
      supplierId: req.params.id,
    },
  });

  return res.status(200).send(result);
});

module.exports = router;
