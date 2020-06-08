
 import mongoose from 'mongoose'


export default mongoose.connect(
    "mongodb+srv://"  + process.env.USER_NAME + ":" + 
    process.env.PASSWORD + "@cluster0-vhani.mongodb.net/" +
     process.env.DB + 
    "?retryWrites=true&w=majority" , 
    {useNewUrlParser: true  , useUnifiedTopology: true ,   useCreateIndex: true})

.then(r=>{
    
    console.log("connected : " );
    
}).catch(er=>{ 
    if(er)throw new Error(er);

}).finally(()=>{
    
})
