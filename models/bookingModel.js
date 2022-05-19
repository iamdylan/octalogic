const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    username: {type: String, required: true},
    vehicle: {type: mongoose.Schema.Types.ObjectId, refPath: ['cars', 'bikes']},
    bookedSlots: {
        from: {type: String}, 
        to: {type: String}
    }
}, {timestamps: true});

const bookingModel = mongoose.model('bookings', bookingSchema);
module.exports = bookingModel;
