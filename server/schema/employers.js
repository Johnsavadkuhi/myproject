import {
    gql
} from 'apollo-server-express'


export default gql`

extend type Query {
    
    employers: [Employer!]!

    employer(id:ID!):Employer!

  
}

extend type Mutation {

    addEmployer(_id:ID! , input:Iemployer):Employer!
    updateEmployer(_id:ID! , input:Iemployer):Employer! 
    deleteEmployer(_id:ID!):Boolean! 

}


input Iemployer {
    self_freelancer_id: ID!
    title:String
    event:String
    description:String
    created_at:String
    updated_at:String
}

type Employer {
   _id:ID!
   self_freelancer_id: ID!
   title:String
   event:String
   description:String
   created_at:String
   updated_at:String

}


` 