const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");
const CarTypes = require("../models/carTypesModel")

router.get("/getallcars", async(req, res) => {
    try {
        const cars = await Car.find()
        res.send(cars);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.get("/getcartypes", async(req, res) => {
    try {
        const carTypes = await CarTypes.find()
        res.send(carTypes);
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;