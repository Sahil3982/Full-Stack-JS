const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Set the port number


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
});
