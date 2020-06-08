const mongoose = require('mongoose');

const projectSkillSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    project_id: {
        type: mongoose.Types.ObjectId,
        ref: Projects
    },
    skill_id: {
        type: mongoose.Types.ObjectId,
        ref: Skills
    },
    description: String,
    created_at: Date,
    updated_at: Date


})

module.exports = mongoose.model("ProjectSkill", projectSkillSchema);