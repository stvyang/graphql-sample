const graphql = require('graphql');
const {
  GraphQLList,
  GraphQLID
} = graphql;

const Delivery = require('../../model/delivery');
const DeliveryType = require('./type')

const query = {
  delivery: {
    type: DeliveryType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Delivery.findById(args.id);
    }
  },
  deliveries: {
    type: new GraphQLList(DeliveryType),
    resolve(parent, args) {
      return Delivery.find({});
    }
  }
}

module.exports = query;
