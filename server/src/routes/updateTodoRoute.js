const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const todo = await TodoModel.findById(req.params.id);
  if (!todo) {
    return res.status(404).end();
  }
  Object.assign(todo, {
    text: req.body.text,
    completed: req.body.completed,
  });
  await todo.save();
  res.json(todo);
};