import axios from 'axios'

const API_URL = 'http://localhost:3000/';

export const freelancer = async variables => {

    const data =  await axios.post(API_URL, {

        query: `
        query ($id:ID!){
            freelancer(id:$id){
                _id 
                username
                email
            }
        }

        `,
        variables
    }).catch(error => {
        console.log("Error : ", error)

    })

    
    return data.data 
}

export const signUp = async variables  =>{

    const data = await axios.post(API_URL , {

        query : `
        
        mutation signUp($name:String! , $family:String! , $username : String! , $email:String! , $password:String!){

            signUp(name:$name, family:$family , username:$username , email : $email , password : $password){
               
                token
            }

        }
        ` , 
        variables 

    }).catch(err=>{
        console.log("Error : ", err)
    })
    console.log("data 222222 : " , data ) 

return data.data 

}

export const singIn = async variables  =>{

    const data = await axios.post(API_URL , {

        


    })



}