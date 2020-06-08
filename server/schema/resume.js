import {
    gql
} from 'apollo-server-express'


export default gql`

extend type Query { 

    resume(id:ID!) : Resume! 
    resumes:[Resume!]!
    resumByFreelancerId(freelancer_id:ID!):[Resume]!

}

extend type Mutation {
    
    createResume( _id:ID , input : Iresume!):Resume!
    updateResume (_id:ID! , input : Iresume!):Resume!
    deleteResume (_id: ID!) : Boolean! 
    deleteResumeByFreelancerId (freelancer_id:ID!) : Boolean !
}

input Iresume {

    freelancer_id : ID!
    position : String 
    description : String 
    birthday: String
    gender : String
    status : Boolean 
    marital_status : Boolean 
    languages : [String] 
    created_at :String 
    updated_at:String 


}

type Resume {

    _id:ID!  
    freelancer_id : ID!
    position : String 
    description : String 
    birthday: String
    gender : String 
    status : Boolean 
    marital_status : Boolean 
    languages : String 
    created_at :String 
    updated_at:String 


}


` 