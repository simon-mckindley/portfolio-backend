const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defines the schema and model for Event records
const skillsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    skills: [
        {
            type: String,
            required: true,
            trim: true
        }
    ]
}, { timestamps: true });

// Create and export the model
const skillsModel = mongoose.model('Skills', skillsSchema);
module.exports = skillsModel;