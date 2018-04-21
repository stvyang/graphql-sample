const graphql = require('graphql');

const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} = graphql;

const BookInputType = new GraphQLInputObjectType({
  name: 'BookInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    stock: { type: new GraphQLNonNull(GraphQLInt) }
  }
});

module.exports = BookInputType;
