import axios from "axios"
import {getIdentityTypeUrl, registerUserUrl,} from "./Urls";


export const getIdentityType =(callback)=>{
    axios.get(getIdentityTypeUrl).then(res => {
        return callback(true, res.data)
    }).catch(err =>{
        return err.data
    })
}

export const registerUser =(param,callback)=>{
    axios.post(registerUserUrl, param).then(res => {
        return callback(true, res.data)
    }).catch(err =>{
        return err.data
    })
}