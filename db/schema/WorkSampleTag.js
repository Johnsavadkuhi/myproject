
const mongoose = require('mongoose'); 

const workSampleTagSchema= mongoose.Schema({
    
    _id:mongoose.Types.ObjectId , 
    work_sample_id : {type:mongoose.Types.ObjectId ,ref : WorkdSample} ,
    tag_id : {type:mongoose.Types.ObjectId , ref : Tag} , 
    description : String , 
    created_at : Date , 
    updated_at : Date 
    

})

module.exports = mongoose.model("WorkSampleTag" , workSampleTagSchema) ;
