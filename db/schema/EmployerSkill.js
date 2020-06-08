const mongoose = require('mongoose');

const employerSkillSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    employer_id: {
        type: mongoose.Types.ObjectId,
        ref: Employers
    },
    skill_id: {
        type: mongoose.Types.ObjectId,
        ref: Skill
    },
    description: String,
    created_at: Date,
    updated_at: Date

})

module.exports = mongoose.model("EmployerSkill", employerSkillSchema);