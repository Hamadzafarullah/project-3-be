const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATABASE_URL
  process.env.NODE_ENV === `production`
  ? process.env.DATABASE_URL
  :`mongodb://localhost/trackapp`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log(`Connected to Mongo baby!!!! ${mongoURI}`)
  })

module.exports = mongoose;

