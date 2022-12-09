const mongoose = require('./connection');

const Travelapp = require('../models/Travelapp');
const travelappSeeds = require('./location.json');

Travelapp.deleteMany({}).then(() => {
    Travelapp.create(travelappSeeds).then(travelapp => {
    })
})


