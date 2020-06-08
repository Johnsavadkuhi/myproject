const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,

    freelancer_id: {
        type: mongoose.Types.ObjectId,
        ref: Freelancer
    },
    employer_id: {
        type: mongoose.Types.ObjectId,
        ref: Employers
    },
    title: String,
    status: String,
    description: String,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model("Messages", messagesSchema);