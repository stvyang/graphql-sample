const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} = graphql;

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

module.exports = CustomerType;
