const express = require("express");
const App = express();
const CostumerRoute = require("./src/routes/products");

App.use("/", CostumerRoute);

App.listen(4000);
