const { Router } = require("express");
const model = require("../models/supplier");

const router = Router();

router
  .route("/suppliers")
  .get(async (req, res) => {
    const result = await model.findAll();
    return res.send(result);
  })
  .post(async (req, res) => {
    const result = await model.create(req.body);
    return res.send(result);
  });

router
  .route("/suppliers/:id")
  .get(async (req, res) => {
    const result = await model.findOne({ where: { id: req.params.id } });
    return res.send(result);
  })
  .put(async (req, res) => {
    await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const result = await model.findOne({ where: { id: req.params.id } });

    return res.send(result);
  });
module.exports = router;
