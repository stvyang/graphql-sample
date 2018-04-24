const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLID,
  GraphQLBoolean
} = graphql;

const Order = require('../../model/order');
const OrderType = require('./type');
const OrderInputType = require('./input-type');
const OrderDetail = require('../../model/order-detail');

const mutation = {
  createOrder: {
    type: OrderType,
    args: { data: { type: OrderInputType } },
    async resolve(parent, args) {
      let order = new Order(args.data);
      await order.save();

      _.forEach(args.data.orderDetails, (orderDetail) => {
        orderDetail.orderId = order._id;
      })

      await OrderDetail.insertMany(args.data.orderDetails);

      return order;
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
