const products = require("../models/products")
const stores = require("../models/stores")

const {v4:uuidv4} = require("uuid")
exports.createProduct = async (req,res) =>{
    try {
        const data = {
            id:uuidv4(),
            storeId:req.params.id,
            productName:req.body.productName,
            productQTY: req.body.productQTY,
            productAmount:req.body.productAmount
        }
        const newProduct = await products.create(data)
        res.status(201).json({
            message:"new product added",
            data:newProduct
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getAll = async (req, res) => {
    try {
        const allProducts = await products.findAll();
        // Send a success response 
        res.status(200).json({
            message: 'All Products',
            data: allProducts
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error: ' + error.message
        })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const oneProduct = await products.findByPk(req.params.id)
        if (!oneProduct) {
            return res.status(404).json("Product not found ")
        }
        const updatedProduct = await oneProduct.update({
            productName: req.body.productName,
            productQTY: req.body.productQTY
        })
        res.status(200).json({
            message: "product updated", data: updatedProduct
        })
    } catch (error) {
        res.status(500), json({ error: error.message })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const product = await products.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json("product not found")
        }

        product.destroy()
        res.status(200).json("product deleted")

    } catch (error) {
        res.status(500), json({ error: error.message })
    }
}

exports.getAllProductsByStore = async (req, res) => {
    try {
        const storeId = req.params.id;
        const allProducts = await products.findAll({where: {storeId: storeId}});
        // Send a success response 
        res.status(200).json({
            message: 'All Products by a particular store',
            data: allProducts
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error: ' + error.message
        })
    }
}