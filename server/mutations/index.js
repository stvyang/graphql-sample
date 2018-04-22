const BookMutation = require('./book');
const OrderMutation = require('./order');

module.exports = {
  ...BookMutation,
  ...OrderMutation
};
