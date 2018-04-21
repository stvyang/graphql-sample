const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('book', bookSchema);
