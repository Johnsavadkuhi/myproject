const mongoose = require('mongoose');

const paymentHistorySchema = mongoose.Schema({

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

module.exports = mongoose.model("PaymentHistory", paymentHistorySchema);