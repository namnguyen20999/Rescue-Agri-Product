const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});
router.post("/addproducts", async (req, res) => {
  const product = req.body.product;

  try {
    const newproduct = new Product({
      name: product.name,
      description: product.description,
      prices: product.prices,
      saleprice: product.saleprice,
      category: product.category,
      image: product.image,
    });
    await newproduct.save();
    res.send("New Product Added Successfully");
  } catch (error) {
    console.log(error);
    // return res.status(400).json({ message: error });
  }
});
module.exports = router;
