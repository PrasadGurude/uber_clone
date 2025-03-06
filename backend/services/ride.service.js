const rideModel = require('../models/ride.model');
const mapsService = require('./maps.service');


async function getFare(origin, destination) {
    if(!origin || !destination){
        throw new Error('Origin and destination are required')
    }

    const distanceTime = await mapsService.getDistanceTime(origin, destination);
    const baseFare = {
        car: 50,
        auto: 30,
        motorcycle: 20
    };

    const perKmRate = {
        car: 10,
        auto: 5,
        motorcycle: 3
    };

    const perMinuteRate = {
        car: 2,
        auto: 1,
        motorcycle: 0.5
    };

    const distance = parseFloat(distanceTime.distance);
    const duration = parseFloat(distanceTime.duration);
    
    const distanceInKm = distance / 1000;
    const durationInMinutes = duration / 60;
    
    const fare = {
        car: baseFare.car + (perKmRate.car * distanceInKm) + (perMinuteRate.car * durationInMinutes),
        auto: baseFare.auto + (perKmRate.auto * distanceInKm) + (perMinuteRate.auto * durationInMinutes),
        motorcycle: baseFare.motorcycle + (perKmRate.motorcycle * distanceInKm) + (perMinuteRate.motorcycle * durationInMinutes)
    };

    return fare;

}

module.exports.createRide = async ({userId , origin , destination , vehicleType}) => {
    if(!userId || !origin || !destination || !vehicleType){
        throw new Error('User, origin, destination and vehicle type are required')
    }

    try {
        const fare = await getFare(origin, destination);

        const ride = rideModel.create({
            user: userId,
            origin,
            destination,
            fare: fare[vehicleType],
        });
    
        return ride;
    } catch (error) {
        throw error;
    }

}