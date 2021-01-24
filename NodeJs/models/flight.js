const mongoose = require('mongoose');


const flightSchema = mongoose.Schema({
    originid: {type: mongoose.Schema.Types.ObjectId, ref: "cities", required: true},
    destinationid: {type: mongoose.Schema.Types.ObjectId, ref: "cities", required: true},
    cost: {type: Number, default: 0}
});

module.exports = mongoose.model('flights', flightSchema);