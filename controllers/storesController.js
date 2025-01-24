// const { json } = require("sequelize");
const stores = require("../models/stores")

const { v4: uuidv4 } = require("uuid");
exports.createStore = async (req, res) => {
    try {
        const data = {
            id: uuidv4(),
            storeName: req.body.storeName,
            location: req.body.location,
            email: req.body.email
        }    
        const existingEmail = await stores.findOne({ where: { email: req.body.email } })

        if (existingEmail) {
            return res.status(400).json({
                message: `user with email ${req.body.email} already exist`
            })
        }
        console.log((data));

        const newStore = await stores.create(data)
        res.status(201).json({
            message: `new store created`,
            data: newStore
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAll = async (req, res) => {
    try {
        const AllUser = await stores.findAll()

        res.status(200).json({
            message: "find all stores available below",
            totalStores: AllUser.length,
            data: AllUser
        })
    } catch (error) {
        res.status(500), json({ error: error.message })
    }
}

exports.getOne = async (req, res) => {
    try {
        const store = await stores.findByPk(req.Params.id)
        if (!store) {
            return res.status(404).json({ message: "store not found" })
        }
        res.status(200).json({
            message: `kindly find the above id`,
            data: store
        })
    } catch (error) {
        res.status(500), json({ error: error.message })

    }
}
exports.updateUser = async (req, res) => {
    try {
        const store = await stores.findByPk(req.params.id)
        if (!store) {
            return res.status(404).json("store not found ")
        }
        const newInfo = await store.update({
            storeName: req.body.storeName,
            location: req.body.location
        })
        res.status(200).json({
            message: "store updated", data: newInfo
        })
    } catch (error) {
        res.status(500), json({ error: error.message })
    }
}

exports.deleteStore = async (req, res) => {
    try {
        const store = await stores.findByPk(req.params.id)
        if (!store) {
            return res.status(404).json("store not found")
        }

        store.destroy()
        res.status(200).json("store deleted")

    } catch (error) {
        res.status(500), json({ error: error.message })
    }
}