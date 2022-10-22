const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

// import routes
const category_route = require("./app/categories/routes/CategoryRoute");

// middlewares
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// routing
app.use(category_route);


app.listen(PORT, () => {
    console.info(`Server running at PORT ${PORT}`)
})