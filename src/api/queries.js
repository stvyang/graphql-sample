const BookQuery = require('./book/query');
const OrderQuery = require('./order/query');
const DeliveryQuery = require('./delivery/query');
const CustomerQuery = require('./customer/query');

module.exports = {
  ...BookQuery,
  ...OrderQuery,
  ...DeliveryQuery,
  ...CustomerQuery
};
