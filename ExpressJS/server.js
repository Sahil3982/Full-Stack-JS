// Importing the Express app instance and configuration
import app from './src/app.js';
import { config } from './src/config/config.js';

// Function to start the server
const startServer = () => {
    const port = config.port || 3000; // Default port is 3000 if not specified in config

    // Start listening on the specified port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Call the startServer function to initiate the server
startServer();
