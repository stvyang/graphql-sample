const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: String,
  orderDate: Date,
  totalPayment: Number,
  isDelivered: Boolean
});

module.exports = mongoose.model('order', orderSchema);
