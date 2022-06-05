const express = require('express');

const createTodoRoute = require('./routes/createTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');

const router = express.Router();

router.post('/todos', createTodoRoute);
router.get('/todos', readTodosRoute);
router.put('/todos/:id', updateTodoRoute);
router.delete('/todos/:id', deleteTodoRoute);

module.exports = router;