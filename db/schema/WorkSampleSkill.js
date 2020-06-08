const mongoose = require('mongoose');

const workSampleSkillSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    work_sample_id: {
        type: mongoose.Types.ObjectId,
        ref: WorkSample
    },
    skill_id: {
        type: mongoose.Types.ObjectId,
        ref: Skills
    },
    description: String,
    created_at: Date,
    updated_at: Date

})

module.exports = mongoose.model("WorkSampleSkill", workSampleSkillSchema);