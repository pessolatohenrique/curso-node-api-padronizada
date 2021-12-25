const { Router } = require("express");
const model = require("../models/supplier");

const router = Router();

router.route("/suppliers").get(async (req, res) => {
  const result = await model.findAll();
  return res.send(result);
});

module.exports = router;
