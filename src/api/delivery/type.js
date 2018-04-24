const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} = graphql;

const { GraphQLDate } = require('graphql-iso-date');
const OrderType = require('../order/type');
const Order = require('../../model/order');

const DeliveryType = new GraphQLObjectType({
  name: 'Delivery',
  fields: {
    id: { type: GraphQLID },
    courierName: { type: GraphQLString },
    deliveryDate: { type: GraphQLDate },
    order: {
      type: OrderType,
      resolve(parent, args) {
        return Order.findOne({ _id: parent.orderId });
      }
    }
  }
})

module.exports = DeliveryType;
