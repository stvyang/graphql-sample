const BookMutation = require('./book/mutation');
const OrderMutation = require('./order/mutation');

module.exports = {
  ...BookMutation,
  ...OrderMutation
};
