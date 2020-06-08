import mongoose from 'mongoose' 
const freelancerScheema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
    },
    family: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        allowNull: false,
        required:true
        
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true , 
    },
    id_number: String,
    id_photo: String,
    verification_status: {
        type: Boolean,
        defalut: false
    }, 
    email_verification_code: {
        type: String,
        defalut: "0"
    },
    email_verification_code_status: {
        type: Boolean,
        defalut: false
    },
    mobile: String,
    mobile_verification_code: Number,
    mobile_verification_code_status: {
        type: Boolean,
        defalut: false
    },
    website_language: {
        type: String,
        defalut: "en"
    },
    project_languages: [String],
    sheba_number: Number,
    country: String,
    city: String,
    status: Boolean,
    leave_reason: String,
    leave_duration: String,
    created_at: {
        type: Date,
        defalut: Date.now
    },
    updated_at: Date,
    description: String

})

module.exports = mongoose.model("Freelancer", freelancerScheema);