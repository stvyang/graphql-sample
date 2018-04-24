const BookMutation = require('./book/mutation');
const OrderMutation = require('./order/mutation');
const DeliveryMutation = require('./delivery/mutation');
const CustomerMutation = require('./customer/mutation');

module.exports = {
  ...BookMutation,
  ...OrderMutation,
  ...DeliveryMutation,
  ...CustomerMutation
};
