const graphql = require("graphql");
const {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const BookInputType = require("../book/input-type");

const OrderDetailInputType = new GraphQLInputObjectType({
  name: "OrderDetailInput",
  fields: {
    quantity: { type: GraphQLInt },
    orderId: { type: GraphQLID },
    bookId: { type: GraphQLString }
  }
});

module.exports = OrderDetailInputType;
