const mongoose = require('mongoose');

const carTypesSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true});

const carTypesModel = mongoose.model('cartypes', carTypesSchema);
module.exports = carTypesModel;
