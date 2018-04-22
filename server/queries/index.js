const BookQuery = require('./book');
const OrderQuery = require('./order');

module.exports = {
  ...BookQuery,
  ...OrderQuery
};
