const dotenv = require('dotenv');
// Load environment variables
dotenv.config();

// JWT secret for signing tokens
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = { JWT_SECRET };