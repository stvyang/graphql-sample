const graphql = require('graphql');
const {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLInt,
} = graphql;

const BookInputType = require('../book/input-type')

const OrderDetailInputType = new GraphQLInputObjectType({
  name: 'OrderDetailInput',
  fields: {
    quantity: { type: GraphQLInt },
    orderId: { type: GraphQLID },
    book: { type: BookInputType }
  }
});

module.exports = OrderDetailInputType;
