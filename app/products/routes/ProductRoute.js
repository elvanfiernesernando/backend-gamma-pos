const express = require("express");
const product_route = express.Router();

// import controller
const { product_create, product_all, product_search } = require("../controllers/ProductController");

product_route.post("/api/products", product_create);
product_route.get("/api/products", product_all);
product_route.post("/api/products/search", product_search);

module.exports = product_route;