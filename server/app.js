const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema');
const app = express();

mongoose.connect('mongodb://stvyang:password@ds231245.mlab.com:31245/graphql-sample');
mongoose.connection.once('open', () => {
	console.log('connected to mLab');
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(4000, () => {
	console.log('apps is listening on port 4000');
})
