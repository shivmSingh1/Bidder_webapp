import Axios from "../config/axios"


export const GET = async (path,query="")=>{
    const result = {
        response: null,
        status : 500
    }
    try {
        const response = await Axios.get(`${path}${query}`)
        if(response){
            return result={
                response,
                status:response.status
            }
        }
    } catch (error) {
        throw error
    }
    return result
}

export const POST = async (path,payload={},headers={})=>{
    const result = {
        response: null,
        status : 500
    }
    try {
        const response = await Axios.post(path,payload,{headers})
        if(response){
            return result={
                response,
                status:response.status
            }
        }
    } catch (error) {
        throw error
    }
    return result
}


export const PUT = async (path,payload={})=>{
    const result = {
        response: null,
        status : 500
    }
    try {
        const response = await Axios.put(path,payload)
        if(response){
            return result={
                response,
                status:response.status
            }
        }
    } catch (error) {
        throw error
    }
    return result
}


export const DELETE = async (path,payload={})=>{
    const result = {
        response: null,
        status : 500
    }
    try {
        const response = await Axios.delete(path,{
            data:payload
        })
        if(response){
            return result={
                response,
                status:response.status
            }
        }
    } catch (error) {
        throw error
    }
    return result
}