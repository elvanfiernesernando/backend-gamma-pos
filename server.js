const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

// import routes
const category_route = require("./app/categories/routes/CategoryRoute");
const product_route = require("./app/products/routes/ProductRoute");
const order_route = require("./app/orders/routes/OrderRoute");

// middlewares
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// routing
app.use(category_route);
app.use(product_route);
app.use(order_route);


app.listen(PORT, () => {
    console.info(`Server running at PORT ${PORT}`)
})