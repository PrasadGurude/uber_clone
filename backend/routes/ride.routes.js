const express = require('express')
const router = express.Router()
const {body , query} = require('express-validator')
const rideController = require('../controllers/ride.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().notEmpty().withMessage('Pickup location is required'),
    body('destination').isString().notEmpty().withMessage('Destination is required'),
    body('vehicleType').isString().isIn(['car','auto','moto']).notEmpty().withMessage('Vehicle type is required'),
    rideController.createRide
);

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().notEmpty().withMessage('Pickup location is required'),
    query('destination').isString().notEmpty().withMessage('Destination is required'),
    rideController.getFare
);

module.exports = router