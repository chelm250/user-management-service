const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtConfig');

// User registration handler
const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save(); // Save the new user to the database
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error }); // Handle registration errors
    }
};

// User login handler
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username }); // Find user by username
        if (!user) return res.status(404).json({ message: 'User not found' });
        const isPasswordValid = await bcrypt.compare(password, user.password); // Validate password
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token }); // Return the token to the user
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error }); // Handle login errors
    }
};

module.exports = { registerUser, loginUser };