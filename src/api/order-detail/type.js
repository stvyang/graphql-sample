const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID
} = graphql;

const BookType = require('../book/type')

const OrderDetailType = new GraphQLObjectType({
  name: 'OrderDetail',
  fields: {
    id: { type: GraphQLID },
    quantity: { type: GraphQLInt },
    orderId: { type: GraphQLID },
    book: { type: BookType }
  }
})

module.exports = OrderDetailType;
