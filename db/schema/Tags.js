const mongoose = require('mongoose'); 

const tagsSchema = mongoose.Schema({
    
    _id:mongoose.Types.ObjectId , 
    name : String, 
    created_at : Date , 
    updated_at : Date 

})

module.exports = mongoose.model("Tags" , tagSchema) ;
