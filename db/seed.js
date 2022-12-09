const mongoose = require('./connection');

const Travelapp = require('../models/Travelapp');
const travelappSeeds = require("../SampleData/location.json");

// Travelapp.deleteMany({}).then(() => {
//     Travelapp.create(travelappSeeds).then(travelapp => {
//     })
// })

const seedinData = async () => {
    try {

        let allData = travelappSeeds;

        console.log('hello', allData);

        const addedData = Travelapp.insertMany(allData);

        console.log(addedData);
    } catch(err) {
        console.log(err);
    }
}
seedinData();

