const express = require("express");
const { order_create, order_all } = require("../controllers/OrderController");

// import router
const order_route = express.Router();

order_route.post("/api/orders", order_create);
order_route.get("/api/orders", order_all);

module.exports = order_route;