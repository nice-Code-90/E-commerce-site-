const express = require('express');
const app = express();

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require('dotenv');

const errorMiddleware = require("./middlewares/errors");

// Config fájl
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Útvonalak importálása
const Products = require("./routes/product");
const Auth = require("./routes/auth");
const Payment = require("./routes/payment");
const Order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
