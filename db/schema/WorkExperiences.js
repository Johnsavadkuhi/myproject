const mongoose = require('mongoose'); 

const workExperiencesSchema= mongoose.Schema({
    
    _id:mongoose.Types.ObjectId , 
    resume_id : {type:mongoose.Types.ObjectId , ref :Resume},
    position : String , 
    company : String , 
    description : String , 
    created_at : Date , 
    updated_at : Date , 
    from :String , 
    to : String 
    
    

})

module.exports = mongoose.model("WorkExperiences" , workExperiencesSchema) ;
