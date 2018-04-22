const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} = graphql;

const { GraphQLDate } = require('graphql-iso-date');

const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
    id: { type: GraphQLID },
    customerName: { type: GraphQLString },
    orderDate: { type: GraphQLDate },
    totalPayment: { type: GraphQLFloat },
    isDelivered: { type: GraphQLBoolean }
  }
})

module.exports = OrderType;
