const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defines the schema and model for Event records
const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    technologies: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create and export the model
const projectModel = mongoose.model('Project', projectSchema);
module.exports = projectModel;