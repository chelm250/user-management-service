const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
app.use(errorMiddleware);

module.exports = app;