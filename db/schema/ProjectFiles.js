const mongoose = require('mongoose');

const prjectFilesSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    project_id: {
        type: mongoose.Types.ObjectId,
        ref: Projects
    },
    file_name: String,
    type: String,
    updated_at: Date,
    created_at: Date,
    description: String

})

module.exports = mongoose.model("ProjectFiles", prjectFilesSchema);