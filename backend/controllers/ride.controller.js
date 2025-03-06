const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ userId:req.user._id, origin, destination, vehicleType });
        res.status(201).json(ride);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}