const mongoose = require('mongoose');


const flightSchema = mongoose.Schema({
    originid: {type: mongoose.Schema.Types.ObjectId, ref: "cities", required: true},
    destinationid: {type: mongoose.Schema.Types.ObjectId, ref: "cities", required: true},
    connections: [
        {
            cityfrom: {type: mongoose.Schema.Types.ObjectId, ref: "cities"},
            cityto: {type: mongoose.Schema.Types.ObjectId, ref: "cities"},
            cost : {type: Number, default: 0}
        }
    ],
    numberofStops: {type: Number, default: 1},
    cost: {type: Number, default: 0}
});

module.exports = mongoose.model('flights', flightSchema);