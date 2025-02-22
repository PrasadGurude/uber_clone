const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blackListTokenModel = require('../models/blackListToken.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ _id: decoded._id });

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized'});
        }

        req.user = user;
        return next();
    } catch (e) {
        res.status(401).send({ message: 'Unauthenticate' });
    }
}