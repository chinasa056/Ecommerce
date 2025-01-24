const express = require("express");
const port = 7070;
const router = require("./router/storeRouter")
const productRouter = require("./router/productRouter");

const app = express()
app.use(express.json())
app.use(router)
app.use(productRouter)

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`);
    
})