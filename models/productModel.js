const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    description: String,
    prices: String,
    saleprice: String,
    category: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
