const express = require("express");
const product_route = express.Router();

// import controller
const { product_create, product_all, product_search, product_by_id, product_update, product_delete } = require("../controllers/ProductController");

product_route.post("/api/products", product_create);
product_route.get("/api/products", product_all);
product_route.get("/api/products/search", product_search);
product_route.get("/api/products/:id", product_by_id);
product_route.patch("/api/products/:id", product_update);
product_route.delete("/api/products/:id", product_delete)

module.exports = product_route;