// Middleware to handle errors
const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: 'Internal Server Error' }); // Send internal error response
};

module.exports = errorMiddleware;