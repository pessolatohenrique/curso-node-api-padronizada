const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello World!!");
});

app.listen(3000, () => console.log("API rodando!"));
