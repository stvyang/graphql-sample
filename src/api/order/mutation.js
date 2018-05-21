const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLID, GraphQLBoolean } = graphql;

const Book = require("../../model/book");
const Order = require("../../model/order");
const OrderType = require("./type");
const OrderInputType = require("./input-type");
const OrderDetail = require("../../model/order-detail");

const mutation = {
  createOrder: {
    type: OrderType,
    args: { data: { type: OrderInputType } },
    async resolve(parent, args) {
      const bookIds = args.data.orderDetails.map(
        orderDetail => orderDetail.bookId
      );
      const books = await Book.find({ _id: { $in: bookIds } });

      let totalPrice = 0;
      for (const book of books) {
        const found = args.data.orderDetails.find(
          orderDetail => orderDetail.bookId === book._id.toString()
        );
        totalPrice += book.price * found.quantity;
      }

      let order = new Order({
        customerName: "system",
        orderDate: new Date(),
        totalPayment: totalPrice,
        isDelivered: false
      });
      await order.save();

      const orderDetails = args.data.orderDetails.map(orderDetail => {
        let data = new OrderDetail(orderDetail);
        data.orderId = order._id;
        data.book = books.find(book => book._id == orderDetail.bookId);
        return data;
      });
      await OrderDetail.insertMany(orderDetails);

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
    }
  }
};

module.exports = mutation;
