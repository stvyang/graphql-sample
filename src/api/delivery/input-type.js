const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const { GraphQLDate } = require('graphql-iso-date');

const DeliveryInputType = new GraphQLInputObjectType({
  name: 'DeliveryInput',
  fields: {
    courierName: { type: GraphQLString },
    deliveryDate: { type: GraphQLDate },
    orderId: { type: GraphQLID }
  }
});

module.exports = DeliveryInputType;
