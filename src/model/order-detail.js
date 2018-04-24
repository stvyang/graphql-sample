const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = mongoose.model('book').schema;

const orderDetailSchema = new Schema({
  orderId: String,
  book: bookSchema,
  quantity: Number
});

module.exports = mongoose.model('order-detail', orderDetailSchema);
