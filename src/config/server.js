const dotenv = require('dotenv');
// Load environment variables
dotenv.config();

// Set the port for the server
const PORT = process.env.PORT || 5000;

module.exports = { PORT };