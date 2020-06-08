const mongoose = require('mongoose');

const bidsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    freelancer_id: {
        type: mongoose.Types.ObjectId,
        ref: Freelancer
    },
    project_id: {
        type: mongoose.Types.ObjectId
    },
    amount: Number,
    due_date: Date,
    sponsor: String,
    difference: String,
    updated_at: Date,
    created_at: Date,
    description: String

})

module.exports = mongoose.model("Bids", bidsSchema);