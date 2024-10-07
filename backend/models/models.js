const mongoose = require('mongoose');
const { type } = require('os');

const todoSchema = new mongoose.Schema(
    {
        toDos:{
            type:String,
            required:true,
        },    
    });

module.exports = mongoose.model("ToDo",todoSchema);

