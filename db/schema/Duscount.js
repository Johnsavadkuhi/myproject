const mongoose = require('mongoose');

const duscountSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    code: Number,
    expiration_date: Date,
    usage_number: Number,
    description: String,
    created_at: Date,
    updated_at: Date
})

module.exports = mongoose.model("Duscount", duscountSchema);