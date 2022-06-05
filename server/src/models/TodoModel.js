const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;