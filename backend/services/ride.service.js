const rideModel = require('../models/ride.model');
const mapsService = require('./maps.service');
const crypto = require('crypto');


async function getFare(origin, destination) {
    if(!origin || !destination){
        throw new Error('Origin and destination are required')
    }

    const distanceTime = await mapsService.getDistanceTime(origin, destination);
    const baseFare = {
        car: 50,
        auto: 30,
        moto: 20
    };

    const perKmRate = {
        car: 10,
        auto: 5,
        moto: 3
    };

    const perMinuteRate = {
        car: 2,
        auto: 1,
        moto: 0.5
    };

    const distance = parseFloat(distanceTime.distance);
    const duration = parseFloat(distanceTime.duration);
    
    const distanceInKm = distance / 1000;
    const durationInMinutes = duration / 60;
    
    const fare = {
        car: baseFare.car + (perKmRate.car * distanceInKm) + (perMinuteRate.car * durationInMinutes),
        auto: baseFare.auto + (perKmRate.auto * distanceInKm) + (perMinuteRate.auto * durationInMinutes),
        moto: baseFare.moto + (perKmRate.moto * distanceInKm) + (perMinuteRate.moto * durationInMinutes)
    };
    return fare;

}

module.exports.getFare = getFare;

async function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({userId , pickup , destination , vehicleType}) => {
    if(!userId || !pickup || !destination || !vehicleType){
        throw new Error('User, pickup, destination and vehicle type are required')
    }

    try {
        const fare = await getFare(pickup, destination);

        const ride = rideModel.create({
            user: userId,
            pickup,
            destination,
            otp: await getOtp(6),
            fare: fare[vehicleType],
        });
    
        return ride;
    } catch (error) {
        throw error;
    }

}