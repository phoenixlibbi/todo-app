const express = require('express');
const router = express.Router();
const todoController = require('./controller');


console.log('router folder!')
router.get('/getalltodo', todoController.getTodos);
router.get('/gettodo/:id',todoController.getTodo);
router.post('/createtodo', todoController.createTodo);
router.patch('/update/:id', todoController.updateTodo);
router.delete('/deletetodo/:id', todoController.deleteTodo);
router.get('/checked/:id',todoController.checked);


module.exports=router;