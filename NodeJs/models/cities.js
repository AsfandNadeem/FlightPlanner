const mongoose = require('mongoose');


const citySchema = mongoose.Schema({
    name: { type: String, required: true},
    country: {type: String}
});

module.exports = mongoose.model('cities', citySchema);