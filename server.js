const express = require("express");

const Product = require("./models/productModel");

const db = require("./db");

const app = express();

app.use(express.json());

const productsRoute = require("./routes/productsRoute");

app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Server is working !!!");
});

app.get("/getproduct", (req, res) => {
  Product.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

const port = process.env.PORT || 5001;

app.listen(port, () => "Server is working on port !!!");
