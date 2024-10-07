const {Router} = require('express');
const { getToDos , saveTodo, updateTodo, DeleteTodo} = require('../controllers/todoController');

const router = Router();

router.get("/get",getToDos);
router.post("/save",saveTodo);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",DeleteTodo);


module.exports = router 
