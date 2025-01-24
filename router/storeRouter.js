// const {}

const { createStore, getAll } = require("../controllers/storesController");


const router = require("express").Router();
router.post("/store", createStore)
router.get("/store", getAll)



module.exports = router