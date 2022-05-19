const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require('../models/carModel');
const Bike = require('../models/bikeModel');

router.post("/bookvehicle", async(req, res) => {
    let vehicle;
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();

        vehicle = await Car.findOne({_id: req.body.vehicle});
        if (!vehicle) {
            vehicle = await Bike.findOne({_id: req.body.vehicle});
        }

        vehicle.bookedTimeSlots.push(req.body.bookedSlots);
        await vehicle.save();

        res.send("Your booking is successfull")
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;