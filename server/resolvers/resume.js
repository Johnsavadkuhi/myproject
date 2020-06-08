import Resume from '../../db/schema/Resume'
import mongoose from 'mongoose';
import '../../db'

export default {

  Query: {
    
    resume:async(parent , {id})=>{
      
      return await Resume.findById(id).exec() 
      
    }, 
    resumByFreelancerId:async(parent , {freelancer_id})=>{

        return await Resume.find({freelancer_id}).exec().catch(err => {throw new Error(err)}) 

    } ,
    resumes:async(parent)=>{

        return await Resume.find().exec().catch(err=>{throw new   Error(err)})
    }

  },

  Mutation: {

    createResume: async (parent, args ) => {
      
      const resume  = new Resume({

        _id:  new mongoose.Types.ObjectId ,
        freelancer_id: args.input.freelancer_id,
        position: args.input.position,
        description: args.input.description,
        birthday: args.input.birthday,
        gender: args.input.gender ,
        status:args.input.status , 
        marital_status : args.input.marital_status , 
        languages : args.input.languages , 
        created_at: new Date().toISOString(), 
        updated_at:new Date().toISOString()  

      })

      const createdResume = await resume.save().catch(err => {
                 
        throw new Error(err)
    })

      console.log("createdResume : " , createdResume) ; 

      return createdResume ; 

    }, 
    updateResume :async (parent , args )=>{
        
    }

  }
}

