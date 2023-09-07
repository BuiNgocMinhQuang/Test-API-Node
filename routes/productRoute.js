const express = require("express");

const router = express.Router();
const Product = require("../models/productModel");
const {
  getProduct,
  getProductByID,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProduct);

router.get("/:id", getProductByID);

//add
router.post("/", addNewProduct);

//update
router.put("/:id", updateProduct);

//delete
router.delete("/:id", deleteProduct);

module.exports = router;
