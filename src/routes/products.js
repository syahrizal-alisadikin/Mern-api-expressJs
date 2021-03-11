const express = require("express");

const router = express.Router();

const CustomerController = require("../controller/products");
// GET Costumer -> GET
router.get("/costumers", CustomerController.GetAllCostumer);
// Post Customer
router.post("/customer", CustomerController.CreateCustomer);

// Export Route
module.exports = router;
