import {AUTH_LOADING,AUTH_SUCCESS,AUTH_FAILURE} from "./Auth.actiontypes"

import axios from "axios"

const url="https://gold-gifted-ladybug.cyclic.app/"

const Login=(data)=> async (dispatch)=>{
    try{

        let response=await axios.post(`${url}/login`,data)

        dispatch({type:AUTH_SUCCESS,token:})

    }
    catch(err){
        dispatch({type:AUTH_FAILURE})
        return err.response.data
    }



}

module.exports={Login}