const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

routes(app);

app.listen(3000, () => console.log("API rodando!"));
