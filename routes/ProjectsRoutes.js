
const express = require("express");
const router = express.Router();
const Project = require("../models/Project.js");

router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects" });
    }
});


module.exports = router;