
const mongoose = require('mongoose'); 

const workSamplesSchema = mongoose.Schema({
    
    _id:mongoose.Types.ObjectId , 
    freelancer_id : {type :mongoose.Types.ObjectId , ref : Freelancer } ,
    image :  String, 
    title : String , 
    description : String , 
    status : Boolean , 
    created_at : Date , 
    updated_at :Date 

})

module.exports = mongoose.model("WorkSamples" , workSamplesSchema) ;

