const graphql = require('graphql');

const {
  GraphQLID,
  GraphQLBoolean
} = graphql;

const Book = require('../models/book');
const BookType = require('../types/book');
const BookInputType = require('../types/book-input');

const mutation = {
  createBook: {
    type: BookType,
    args: { data: { type: BookInputType } },
    resolve(parent, args) {
      let book = new Book(args.data);
      return book.save();
    }
  },
  updateBook: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID }, data: { type: BookInputType } },
    resolve(parent, args) {
      return Book.updateOne({ _id: args.id }, args.data);
    }
  },
  deleteBook: {
    type: GraphQLBoolean,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Book.deleteOne({ _id: args.id });
    },
  }
}

module.exports = mutation;
