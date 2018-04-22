const graphql = require('graphql');

const {
  GraphQLID,
  GraphQLBoolean
} = graphql;

const Order = require('../../model/order');
const OrderType = require('./type');
const OrderInputType = require('./input-type');

const mutation = {
  createOrder: {
    type: OrderType,
    args: { data: { type: OrderInputType } },
    resolve(parent, args) {
      let order = new Order(args.data);
      return order.save();
    }
  },
  updateOrder: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID }, data: { type: OrderInputType } },
    resolve(parent, args) {
      return Order.updateOne({ _id: args.id }, args.data);
    }
  },
  deleteOrder: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Order.deleteOne({ _id: args.id });
    },
  }
}

module.exports = mutation;
