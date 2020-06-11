import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Freelancer from '../../db/schema/Freelancer'
import mongoose from 'mongoose';
import {UserInputError  , AuthenticationError} from 'apollo-server'
import '../../db'


export default {

  Query: {
    
    freelancer:async(parent , {id})=>{
      
      console.log("requsted from client ")

      const d =  await Freelancer.findById(id) 
      console.log(d);
      
      return d ; 

    }, 

    currentFreelancer: async  (parent, args,context ) => {

      if (!context) {

        throw new Error('Not Authenticated')
      }else {
        console.log("context  is  : " ,context  );
        
      }
      return context
    }
  
  }, 

  Mutation: {

    signUp: async (parent, args, {
      secret
    }) => {

      
      const hashed  =  await generatePasswordHash(args.password) ; 
      
      const freelancer = new Freelancer({

        _id: new mongoose.Types.ObjectId,
        name: args.name,
        family: args.family,
        username: args.username,
        email: args.email,
        password: hashed

      })
  
      const createdFreelancer = await freelancer.save()

      return {
        token: createToken(createdFreelancer, secret, '30m')
      }

    }, 

    signIn:async (paretn ,args  )=>{
 

    const freelancer =  await  Freelancer.find({username:args.login} ).select("_id username email")

  
      if(!freelancer){
        throw new UserInputError('No user found with this login credentials')
      }

      const isValid  = await validatePassword(args.login , args.password ) 
 
      if(!isValid){
        throw new AuthenticationError('Invalid Password')
      }
     
       return {token:createToken(freelancer , "30m")}
      

    } , 
 
    profile:async(parent , args , {secret})=>{
      
    }
  }

}

const createToken =  (freelancer, expiresIn) => {

  const [{
    id,
    username,
    email,
    
  }] = freelancer;

   console.log("_id : ", id, "email : ", email, "username : ", username);

  return  jwt.sign({
    id,
    username, 
    email 
  }, process.env.SECRET, {
    expiresIn
  });
};

const generatePasswordHash = async (password) => {

  const saltRound = 10
  return await bcrypt.hash(password, saltRound)

}

const validatePassword = async function(username , pass){

  const d  = await Freelancer.find({username});
  const hashed =  await generatePasswordHash(pass); 
  return await bcrypt.compare(pass ,  d[0].password  ) 
  
}