const {Router} = require('express');
const { getToDos , saveTodo} = require('../controllers/todoController');

const router = Router();

router.get("/get",getToDos);
router.post("/save",saveTodo);


module.exports = router 
