const BookQuery = require('./book/query');
const OrderQuery = require('./order/query');

module.exports = {
  ...BookQuery,
  ...OrderQuery
};
