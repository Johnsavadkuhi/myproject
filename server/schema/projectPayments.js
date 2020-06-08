import {
    gql
} from 'apollo-server-express'


export default gql`

extend type Query {
    
    projectPayment(id:ID!):ProjectPayment!
    projectPayments:[ProjectPayment!]!

}

extend type Mutation {

    addProjectPayment(id:ID! , input:ProjectPayment!) : ProjectPayment!

}


input ProjectPayment {
    project_id:ID!
    discount_id:ID!
    description: String
    bank_receipt: String
    tracking_code: Int
    status: Boolean
    total_price: Float
    updated_at: String
    created_at: String
}

type ProjectPayment {
    _id:ID!
    project_id:ID!
    discount_id:ID!
    description: String
    bank_receipt: String
    tracking_code: Int
    status: Boolean
    total_price: Float
    updated_at: String
    created_at: String
}


` 