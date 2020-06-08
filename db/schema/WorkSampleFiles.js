const mongoose = require('mongoose');

const workSampleFilesSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    work_sample_id: {
        type: mongoose.Types.ObjectId,
        ref: WorkSample
    },
    file_name: String,
    type: String,
    description: String,
    status: Boolean,
    created_at: Date,
    updated_at: Date

})

module.exports = mongoose.model("WorkSampleFiles", workSampleFilesSchema);