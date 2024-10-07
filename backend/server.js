const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello are you there");
})

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})
