import mongoose from 'mongoose' 

const employersSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    self_freelancer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Freelancer"
    },
    title: String,
    event: String,
    description: String,
    created_at: String,
    updated_at: String

})

module.exports = mongoose.model("Employers", employersSchema);