const express = require("express");
const { order_create } = require("../controllers/OrderController");

// import router
const order_route = express.Router();

order_route.post("/api/orders", order_create);

module.exports = order_route;