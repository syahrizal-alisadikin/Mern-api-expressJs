const express = require("express");

const route = express.Router();
const AuthController = require("../controller/auth");

route.post("/register", AuthController.register);

module.exports = route;
