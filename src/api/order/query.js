const graphql = require('graphql');

const {
  GraphQLList,
  GraphQLID
} = graphql;

const Order = require('../../model/order');
const OrderType = require('./type')

const query = {
  order: {
    type: OrderType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Order.findById(args.id);
    }
  },
  orders: {
    type: new GraphQLList(OrderType),
    resolve(parent, args) {
      return Order.find({});
    }
  }
}

module.exports = query;
