const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const page = req.query.page || 0;
  const PAGE_SIZE= 2;
  const todos = await TodoModel.find({}, null, {
    limit: PAGE_SIZE, skip: page * PAGE_SIZE
  });
  res.json(todos);
}