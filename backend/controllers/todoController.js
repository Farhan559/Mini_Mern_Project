const TodoModel = require('../models/models');

module.exports.getToDos = async(req,res)=>{
    const toDos = await TodoModel.find()
    res.send(toDos);
}

module.exports.saveTodo = (req,res)=>{
    const {toDo} = req.body
    TodoModel.create({toDo})
    .then(data =>{
        console.log('save successfully');
        res.status(200).send(data)
    })
    .catch((err)=> console.log(err));
}