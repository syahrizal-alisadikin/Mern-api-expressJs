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

// blog Routes
const blogRoutes = require("./src/routes/blogRoutes");
// Route Auth
const AuthRoute = require("./src/routes/auth");
// Body Parse Json
App.use(BodyParser.json());
App.use("/v1/blogs", AuthRoute);
App.use("/v1/blogs", blogRoutes);

App.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message,
    data,
  });
});
App.listen(4000);
