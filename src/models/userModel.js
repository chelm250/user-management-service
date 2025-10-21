const mongoose = require('mongoose');

// Define the user schema for MongoDB
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Unique username
    password: { type: String, required: true }, // User password
    email: { type: String, required: true, unique: true }, // Unique email address
    createdAt: { type: Date, default: Date.now }, // Timestamp for user creation
});

const User = mongoose.model('User', userSchema); // Create User model

module.exports = User;