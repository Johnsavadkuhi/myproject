import 'dotenv/config'
import express from 'express'
import {ApolloServer , AuthenticationError} from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import  './db' 
import typeDefs from './server/schema' 
import resolvers from './server/resolvers'
import jwt from 'jsonwebtoken';
 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

const getUser =  (token) => {
     
    try {
    
        if (token) {
            
        return  jwt.verify(token, process.env.SECRET )
      
    }
      return null
    
    } catch (err) {
    
        return null
    }
  }
  
const server = new ApolloServer({

    typeDefs,
    resolvers,
    context: async ({req}) => {

        const token = req.headers.authorization
        
        const user = getUser(token) 
      
        return user 

    },
    
})

server.applyMiddleware({
    app,
    path: '/'  
})

app.listen(process.env.PORT, () => {
    console.log("server is running on port " + process.env.PORT);
})