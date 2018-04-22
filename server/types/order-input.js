const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} = graphql;

const { GraphQLDate } = require('graphql-iso-date');

const OrderInputType = new GraphQLInputObjectType({
  name: 'OrderInput',
  fields: {
    customerName: { type: GraphQLString },
    orderDate: { type: GraphQLDate },
    totalPayment: { type: GraphQLFloat },
    isDelivered: { type: GraphQLBoolean }
  }
});

module.exports = OrderInputType;
