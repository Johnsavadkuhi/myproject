const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    freelancer_id: {
        type: mongoose.Types.ObjectId,
        ref: Freelancer
    },
    employer_id: {
        type: mongoose.Types.ObjectId,
        ref: Employes
    },
    title: String,
    status: Boolean,
    rate: String,
    description: String,
    created_at: Date,
    updated_at: Date


})

module.exports = mongoose.model("Comments", commentsSchema);