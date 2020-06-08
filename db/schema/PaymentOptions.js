const mongoose = require('mongoose');

const paymentOptionsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    bid_id: {
        type: mongoose.Types.ObjectId,
        ref: Bids
    },
    amount: Number,
    title: String,
    updated_at: Date,
    created_at: Date,
    description: String
})

module.exports = mongoose.model("PaymentOptions", paymentOptionsSchema);