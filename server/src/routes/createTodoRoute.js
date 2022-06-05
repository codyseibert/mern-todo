const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const todo = new TodoModel({
    text: req.body.text,
    completed: false,
  });
  await todo.save();
  res.json(todo);
};