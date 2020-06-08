const mongoose = require('mongoose'); 

const educationalExperiencesSchema = mongoose.Schema({
    
    _id:mongoose.Types.ObjectId , 
    resume_id  : {type:mongoose.Types.ObjectId , ref : Resume}, 
    certificate : String , 
    institute : String ,
    description : String , 
    created_at:Date , 
    updated_at:Date , 
    from :String, 
    to : String 

})

module.exports = mongoose.model("EducationalExperiences" , educationalExperiencesSchema) ;
