const express = require('express');

const loginRoute = require('./routes/loginRoute');

const createTodoRoute = require('./routes/createTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');

const router = express.Router();

const isLoggedIn = require('./middleware/isLoggedIn');

router.get('/login', loginRoute);

router.post('/todos', isLoggedIn, createTodoRoute);
router.get('/todos',isLoggedIn,  readTodosRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

module.exports = router;