const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    parent: String,
    title: String,
    description: String,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model("Skills", skillsSchema);