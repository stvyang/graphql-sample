const graphql = require('graphql');

const {

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
  }
}

module.exports = mutation;
