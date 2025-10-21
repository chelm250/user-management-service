const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
connectDB(); // Connect to the database

app.use('/api/users', userRoutes); // Use user routes
app.use(errorMiddleware); // Use error handling middleware

module.exports = app;