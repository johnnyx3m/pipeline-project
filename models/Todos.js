const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  description: String,
  complete: Boolean
});

module.exports.Todos = mongoose.model('Todo', todoSchema)