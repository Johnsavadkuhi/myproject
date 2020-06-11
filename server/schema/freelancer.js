import {
    gql
} from 'apollo-server-express'

export default gql `

extend type Query {
   
    freelancers :[Freelancer!]!
    freelancer(id:ID!):Freelancer!
    currentFreelancer :FreelancerAuth  

}

extend type Mutation{
    
    signUp(username :String! email : String! password:String!):Token

        signIn(login:String! , password: String!):Token
        
        profile(input: Ifreelancer!): Boolean!

        updateProfile(input:Ifreelancer!) : Boolean!
        
        deleteFreelancer(_id:ID!) : Boolean!

}

type Token{
    token : String
}

input Ifreelancer { 
    
    _id :ID! 
    name : String
    family :String
    id_number: String
    id_photo: String
    verification_status : String
    email_verification_code:String
    mobile :String!
    mobile_verification_code:String
    mobile_verification_code_status:String
    website_language:String
    project_languages:[String]
    sheba_number:String
    country : String
    city:String
    status: Boolean
    leave_reason: String
    leave_duration: String
    created_at:String
    updated_at:String
    description:String
}

type Freelancer {
    _id :ID! 
    name : String
    family :String
    username :String
    email:String
    password :String
    id_number: String
    id_photo: String
    verification_status : String
    email_verification_code:String
    mobile :String!
    mobile_verification_code:String
    mobile_verification_code_status:String
    website_language:String
    project_languages:[String]
    sheba_number:String
    country : String
    city:String
    status: Boolean
    leave_reason: String
    leave_duration: String
    created_at:String
    updated_at:String
    description:String
}

type FreelancerAuth{ 

    username:String
    email:String
    iat: Int,
    exp: Int
}



`