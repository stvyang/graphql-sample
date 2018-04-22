const graphql = require('graphql');

const {
  GraphQLList,
  GraphQLID
} = graphql;

const Book = require('../../model/book');
const BookType = require('./type');

const query = {
  book: {
    type: BookType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Book.findById(args.id)
    }
  },
  books: {
    type: new GraphQLList(BookType),
    resolve(parent, args) {
      return Book.find({});
    }
  }
}

module.exports = query;
