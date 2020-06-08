import {gql} from 'apollo-server-express' 

import freelancerSchema from './freelancer'
import resumeSchema from './resume' 

const linkSchema = gql`

type Query{
    _:Boolean 
} 

type Mutation {
        _:Boolean

}

type Subscription {

    _:Boolean
}

`

export default [linkSchema , freelancerSchema , resumeSchema ] 