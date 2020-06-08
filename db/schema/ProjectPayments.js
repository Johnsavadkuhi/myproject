const mongoose = require('mongoose');

const projectPaymentsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Projects"
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Discount"
    },
    description: String,
    bank_receipt: String,
    tracking_code: Number,
    status: Boolean,
    total_price: Number,
    updated_at: String,
    created_at: String,

})

module.exports = mongoose.model("ProjectPayments", projectPaymentsSchema);