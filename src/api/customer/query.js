const graphql = require('graphql');

const {
  GraphQLList,
  GraphQLID
} = graphql;

const Customer = require('../../model/customer');
const CustomerType = require('./type');

const query = {
  customer: {
    type: CustomerType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Customer.findById(args.id)
    }
  },
  customers: {
    type: new GraphQLList(CustomerType),
    resolve(parent, args) {
      return Customer.find({});
    }
  }
}

module.exports = query;
