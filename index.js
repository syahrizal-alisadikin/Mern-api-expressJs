const express = require("express");

const App = express();

App.use(() => {
  console.log("Server Node js");
  console.log("Server Node Laravel");
  console.log("Server Node Php");
  console.log("Server Node Php");
});

App.listen(4000);
