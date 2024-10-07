const {Router} = require('express');
const { getToDos , saveTodo, updateTodo} = require('../controllers/todoController');

const router = Router();

router.get("/get",getToDos);
router.post("/save",saveTodo);
router.put("/update/:id",updateTodo)


module.exports = router 
