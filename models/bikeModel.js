const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    rentPerHour: {type: Number, required: true},
    bookedTimeSlots: [
        {
            from: {type: String, required: true},
            to: {type: String, required: true}
        }
    ],
    type: {type: String, required: true}
}, {timestamps: true});

const bikeModel = mongoose.model('bikes', bikeSchema);
module.exports = bikeModel;
