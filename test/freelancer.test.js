
import   chai from 'chai'    
const freelancer = require('../schema/freelancer')

import * as userApi from './api';


const expect = chai.expect 

// describe('freelancers' , async ()=>{
//     describe('freelancer:[Freelancer]', async ()=>{
//         it('returned freelancer widh id  ' , async ()=>{

//             const expectResult = {
//                 data : {
//                     freelancer:{

//                         _id:'5edc0bd60dc10e6332e7e793',
//                         username:'johnsavadkuhi',
//                         email:'physitime@gmail.com',
                        
//                     }
//                 }
//             }

//             const result =  await userApi.freelancer({id:'5edc0bd60dc10e6332e7e793'})

//             console.log( result , expectResult )
            
//             expect(expectResult).to.eql(result) 
//         })

//     })
// })

describe('signUp' , ()=>{
    describe('  signUp() ', ()=>{

        it('It should Signup successfully!' ,async ()=>{
            

            const r = await userApi.signUp({name:"Mohammad" , family:'savadkuhi' , 
            username:'heljfhkfdjlo' , email:"lfkj@gmail.com" , password:"ljjjfjfkj"}).catch(err=>{
                throw new Error(err) 

            })

            expect(r).to.have.property('token')
        
           
        })
     })

})