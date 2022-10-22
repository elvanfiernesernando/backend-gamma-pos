const express = require("express");
const product_route = express.Router();

// import controller
const { product_create } = require("../controllers/ProductController");

product_route.post("/api/products", product_create);

module.exports = product_route;