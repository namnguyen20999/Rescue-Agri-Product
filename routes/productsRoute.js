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

router.post("/deleteproduct", async (req, res) => {
  const productid = req.body.productid;

  try {
    await Product.findOneAndDelete({ _id: productid });
    res.send("Product Deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
