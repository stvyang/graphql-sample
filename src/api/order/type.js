const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList
} = graphql;
const { GraphQLDate } = require('graphql-iso-date');

const OrderDetailType = require('../order-detail/type');
const OrderDetail = require('../../model/order-detail');

const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
    id: { type: GraphQLID },
    customerName: { type: GraphQLString },
    orderDate: { type: GraphQLDate },
    totalPayment: { type: GraphQLFloat },
    isDelivered: { type: GraphQLBoolean },
    orderDetails: {
      type: new GraphQLList(OrderDetailType),
      resolve(parent, args) {
        return OrderDetail.find({ orderId: parent.id });
      }
    }
  }
})

module.exports = OrderType;
