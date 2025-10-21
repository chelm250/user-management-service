const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Define routes for user management
router.post('/register', registerUser); // Route for user registration
router.post('/login', loginUser); // Route for user login

module.exports = router;