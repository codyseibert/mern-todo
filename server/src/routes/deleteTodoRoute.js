const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const todo = await TodoModel.findById(req.params.id);
  if (todo) {
    todo.remove();
    res.json(todo);
  } else {
    res.status(204).end();
  }
};