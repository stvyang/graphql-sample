const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./src/api/schema');
const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

mongoose.connect('mongodb://stvyang:password@ds231245.mlab.com:31245/graphql-sample');
mongoose.connection.once('open', () => {
  console.log('Connected to mLab');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`GraphQL apps is running on port ${port}`);
})
