const express = require("express");
const app = express();

// load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json request body
app.use(express.json());

// import routes from Todo api
const todoRoutes = require('./routes/todos');

// mount the todo api routes. we can add versions(v1) to the app 
app.use('/api/v1', todoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`);
})

// Connect to database
const dbConnect = require('./config/database');
dbConnect();

// Default route
app.get('/', (req, res) => {
    res.send(`<h1>This is your Homepage Baby</h1>`)
})