
const express = require("express");
const router = express.Router();
const Skills = require("../models/Skills.js");

router.get("/", async (req, res) => {
    try {
        const skills = await Skills.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: "Error fetching skills" });
    }
});


module.exports = router;