import mongoose from 'mongoose' 


const resumeSchema = mongoose.Schema({
    
    _id: mongoose.Types.ObjectId,
    freelancer_id : {type:mongoose.Schema.Types.ObjectId , ref:"Freelancer"} , 
    position : String , 
    description : String , 
    birthday: String, 
    gender : String , 
    status : Boolean , 
    marital_status : Boolean , 
    languages : [String] , 
    created_at :String  , 
    updated_at:String  , 


})

module.exports = mongoose.model("Resume" , resumeSchema) ;
