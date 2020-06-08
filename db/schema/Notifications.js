notifications

const mongoose = require('mongoose'); 

const notificationsSchema = mongoose.Schema({
    
    _id:mongoose.Types.ObjectId , 
    freelancer_id : {type:mongoose.Types.ObjectId , ref : Freelancer} , 
    content:String , 
    type : String , 
    created_at:Date , 
    updated_at : Date 


})

module.exports = mongoose.model("Notifications" , notificationsSchema) ;
