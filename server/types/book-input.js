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
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLInt }
  }
});

module.exports = BookInputType;
