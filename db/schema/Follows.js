const mongoose = require('mongoose');

const followsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,

    // follower_freelancer_id : {type:mongoose.Types.ObjectId , ref : }, 
    // follower_employer_id : {type:mongoose.Types.ObjectId , ref : }, 
    // following_freelancer_id : {type:mongoose.Types.ObjectId , ref : }, 
    // following_employer_id : {type:mongoose.Types.ObjectId , ref : } , 
    description: String,
    created_at: Date,
    updated_at: Date

})

module.exports = mongoose.model("Follows", followsSchema);