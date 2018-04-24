const BookQuery = require('./book/query');
const OrderQuery = require('./order/query');
const DeliveryQuery = require('./delivery/query');

module.exports = {
  ...BookQuery,
  ...OrderQuery,
  ...DeliveryQuery
};
