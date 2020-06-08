const mongoose = require('mongoose'); 

const achievmentsSchemal = mongoose.Schema({
    
    _id:mongoose.Types.ObjectId ,
    resume_id : {type:mongoose.Types.ObjectId , ref : Resume} , 
    title : String ,
    event :String , 
    description : String , 
    created_at  : Date , 
    updated_at : Date  

})

module.exports = mongoose.model("Achievments" , achievmentsSchemal) ;
