const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList
} = graphql;

const { GraphQLDate } = require('graphql-iso-date');
const OrderDetailInputType = require('../order-detail/input-type');

const OrderInputType = new GraphQLInputObjectType({
  name: 'OrderInput',
  fields: {
    customerName: { type: GraphQLString },
    orderDate: { type: GraphQLDate },
    totalPayment: { type: GraphQLFloat },
    isDelivered: { type: GraphQLBoolean },
    orderDetails: { type: new GraphQLList(OrderDetailInputType) }
  }
});

module.exports = OrderInputType;
