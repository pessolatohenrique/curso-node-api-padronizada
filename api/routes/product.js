const { Router } = require("express");
const model = require("../models/product");

const router = Router();

router
  .route("/supplier/:id/products")
  .get(async (req, res) => {
    const result = await model.findAll({
      where: {
        supplierId: req.params.id,
      },
    });

    return res.status(200).send(result);
  })
  .post(async (req, res) => {
    try {
      const objectToSave = { ...req.body, supplierId: req.params.id };
      const result = await model.create(objectToSave);
      return res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });

router.route("/products/:id").delete(async (req, res) => {
  await model.destroy({ where: { id: req.params.id } });
  return res.status(204).send();
});

module.exports = router;
