const express = require("express");
const product_route = express.Router();

// import controller
const { product_create, product_all } = require("../controllers/ProductController");

product_route.post("/api/products", product_create);
product_route.get("/api/products", product_all);

module.exports = product_route;