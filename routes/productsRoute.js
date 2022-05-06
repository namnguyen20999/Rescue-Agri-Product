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

router.post("/addproduct", async (req, res) => {
  const product = req.body.product;

  try {
    const newProduct = new Product({
      name: product.name,
      description: product.description,
      prices: product.prices,
      saleprice: product.saleprice,
      category: product.category,
      image: product.image,
    });
    await newProduct.save();
    res.send("New Product Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
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

router.post("/editproduct", async (req, res) => {
  const editedproduct = req.body.editedproduct;

  try {
    const product = await Product.findOne({ _id: editedproduct._id });

    (product.name = editedproduct.name),
      (product.description = editedproduct.description),
      (product.prices = editedproduct.prices),
      (product.saleprice = editedproduct.saleprice),
      (product.category = editedproduct.category),
      (product.image = editedproduct.image);

    await product.save();

    res.send("Product Details Edited successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getproductbyid", async (req, res) => {
  const productid = req.body.productid;

  try {
    const product = await Product.findOne({ _id: productid });
    res.send(product);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
