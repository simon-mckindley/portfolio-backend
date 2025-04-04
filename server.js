// Description: This is the main entry point for the server application. 
// It sets up the Express server, connects to MongoDB, and defines the API routes for projects and skills.

// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const PORT = process.env.PORT || 3000;

// express app setup -----------------------
const app = express()
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => console.log(`MongoDB connected. Server running on port ${PORT} :-)`));
})
.catch(err => console.error('MongoDB connection error:', err));

// API routes ------------------------------
// Home page
app.get('/', (req, res) => {
    res.send("Home");
})

// Projects API
const projectsRouter = require('./routes/ProjectsRoutes.js');
app.use('/projects', projectsRouter);

// Skills API
const skillsRouter = require('./routes/SkillsRoutes.js');
app.use('/skills', skillsRouter);