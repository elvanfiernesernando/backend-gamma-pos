const express = require("express");
const { category_create, category_all, category_by_id, category_edit, category_delete } = require("../controllers/CategoryController");

// import controller
const category_route = express.Router();

category_route.post("/api/categories", category_create);
category_route.get("/api/categories", category_all);
category_route.get("/api/categories/:id", category_by_id);
category_route.patch("/api/categories/:id", category_edit);
category_route.delete("/api/categories/:id", category_delete)

module.exports = category_route;