const mongoose = require('mongoose');

const bikeTypesSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true});

const bikeTypesModel = mongoose.model('biketypes', bikeTypesSchema);
module.exports = bikeTypesModel;
