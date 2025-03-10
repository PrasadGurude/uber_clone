const { map } = require('../app');
const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket'); // updated import
const rideModel = require('../models/ride.model');


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ userId: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);

        // Run notifications in background so errors do not affect the response
        (async () => {
            try {
                const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
                console.log(pickupCoordinates);
                const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);
                ride.otp = "";
                const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
                captainsInRadius.forEach(captain => {
                    console.log(captain, ride);
                    sendMessageToSocketId(captain.socketId, {
                        event: 'new-ride',
                        data: rideWithUser
                    });
                });
                console.log(captainsInRadius);
            } catch (e) {
                console.error('Notification error:', e.message);
            }
        })();
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}