const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require('./routes/routes')

const app = express();
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDb Connected")
})
.catch((err) => { // Capture the error here
    console.error("MongoDB connection error:", err); // Log the error
});
app.use("/api",routes);

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})
