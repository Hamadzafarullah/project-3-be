const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.DATABASE_URL

mongoose
    .connect(mongoURI)
    .then((instance) =>
        console.log(`Connected to SampleData: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;

