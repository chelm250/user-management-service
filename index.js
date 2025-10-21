const app = require('./app');
const { PORT } = require('./config/server');

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server start
});