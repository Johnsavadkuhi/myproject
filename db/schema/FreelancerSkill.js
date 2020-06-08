const mongoose = require('mongoose');

const freelancerSkillSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    freelancer_id: {
        type: mongoose.Types.ObjectId
    },
    skill_id: {
        type: mongoose.Types.ObjectId,
        ref: Skills
    },

    rate: String,
    description: String,
    created_at: Date,
    updated_at: Date

})

module.exports = mongoose.model("FreelancerSkill", freelancerSkillSchema);