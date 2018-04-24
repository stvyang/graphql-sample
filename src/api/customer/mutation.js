const graphql = require('graphql');
const {
  GraphQLID,
  GraphQLBoolean
} = graphql;

const Customer = require('../../model/customer');
const CustomerType = require('./type');
const CustomerInputType = require('./input-type');

const mutation = {
  createCustomer: {
    type: GraphQLBoolean,
    args: { data: { type: CustomerInputType } },
    resolve(parent, args) {
      let customer = new Customer(args.data);
      return customer.save();
    }
  },
  updateCustomer: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID }, data: { type: CustomerInputType } },
    resolve(parent, args) {
      return Customer.updateOne({ _id: args.id }, args.data);
    }
  },
  deleteCustomer: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Customer.deleteOne({ _id: args.id });
    },
  }
}

module.exports = mutation;
