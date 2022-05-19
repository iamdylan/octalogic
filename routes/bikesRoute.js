const express = require("express");
const router = express.Router();
const Bike = require("../models/bikeModel");
const BikeTypes = require("../models/bikeTypesModel");

router.get("/getallbikes", async(req, res) => {
    try {
        const bikes = await Bike.find()
        res.send(bikes);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.get("/getbiketypes", async(req, res) => {
    try {
        const bikeTypes = await BikeTypes.find()
        res.send(bikeTypes);
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;