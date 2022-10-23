const express = require("express");
const { category_create, category_all } = require("../controllers/CategoryController");

// import controller
const category_route = express.Router();

category_route.post("/api/categories", category_create);
category_route.get("/api/categories", category_all);
category_route.get("/api/categories/:id", category_all);

module.exports = category_route;