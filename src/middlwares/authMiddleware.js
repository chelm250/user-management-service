const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtConfig');

// Middleware to authenticate user using JWT
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header
    if (!token) return res.status(403).json({ message: 'No token provided' }); // No token provided
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' }); // Invalid token
        req.userId = decoded.id; // Store userId in request
        next(); // Proceed to the next middleware
    });
};

module.exports = authMiddleware;