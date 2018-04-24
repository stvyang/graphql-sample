const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLID,
  GraphQLBoolean
} = graphql;

const Delivery = require('../../model/delivery');
const DeliveryType = require('./type');
const DeliveryInputType = require('./input-type');

const mutation = {
  createDelivery: {
    type: GraphQLBoolean,
    args: { data: { type: DeliveryInputType } },
    async resolve(parent, args) {
      let delivery = new Delivery(args.data);
      try {
        await delivery.save();
      } catch (e) {
        return false;
      }
      return true;
    }
  },
  updateDelivery: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID }, data: { type: DeliveryInputType } },
    resolve(parent, args) {
      return Delivery.updateOne({ _id: args.id }, args.data);
    }
  },
  deleteDelivery: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Delivery.deleteOne({ _id: args.id });
    }
  }
}

module.exports = mutation;
