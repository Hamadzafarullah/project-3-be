const mongoose = require('../db/connection');
const Schema = mongoose.Schema;



const TravelappSchema = new Schema(
    {
 
        location: String,
        cost: String,
        attractions: String,
        images: String,
       information:String
    }
);

const Travelapp = mongoose.model('Travelapp', TravelappSchema);

module.exports = Travelapp