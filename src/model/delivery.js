const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  courierName: String,
  deliveryDate: Date,
  orderId: { type: Schema.Types.ObjectId, ref: 'order' }
});

module.exports = mongoose.model('delivery', deliverySchema);
