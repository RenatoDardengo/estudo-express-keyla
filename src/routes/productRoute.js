const express = require("express");
const router = express.Router();
const productController = require ("../controllers/ProductController")

router.get("/", productController.index);
router.post("/", productController.create);
router.delete("/:id",);

module.exports= router;