import commonAPI from "./commonAPI"
import server_url from "./server_url"


// api for register  user 

export const registerAPI = async(reqBody)=>{
return await  commonAPI("POST",`${server_url}/register`,reqBody)
}


// api for user login 

export const loginAPI = async(reqBody)=>{
    return await  commonAPI("POST",`${server_url}/login`,reqBody)
    }

// api for add project 

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await  commonAPI("POST",`${server_url}/add-projects`,reqBody,reqHeader)
    }
    