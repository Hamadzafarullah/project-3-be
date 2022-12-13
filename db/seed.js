const mongoose = require('./connection');

const Travelapp = require('../models/Travelapp');
const travelappSeeds = require("../SampleData/location.json");

Travelapp.remove({}).then(() => {
  return Travelapp.collection.insert(travelappSeeds)
}).then(() => {
  process.exit()
})
