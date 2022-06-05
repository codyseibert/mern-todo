
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;