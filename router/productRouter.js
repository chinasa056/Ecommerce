// const {}

const { createProduct, getAll, updateProduct, deleteProduct, getAllProductsByStore } = require("../controllers/productController");

const router = require("express").Router();

router.post("/product/:id", createProduct)
router.get("/product", getAll)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)
router.get("/product/:id", getAllProductsByStore)





module.exports = router