const express = require("express");
const App = express();
const BodyParser = require("body-parser");
// Handle Cors Express Js
App.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Semua boleh Akses
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

// Route Product
const CostumerRoute = require("./src/routes/products");
// Route Auth
const AuthRoute = require("./src/routes/auth");
// Body Parse Json
App.use(BodyParser.json());
App.use("/", CostumerRoute);
App.use("/", AuthRoute);

App.listen(4000);
