
import {PRODUCT_FAILURE,PRODUCT_LOADING,PRODUCT_SUCCESS} from "./Product.actiontype"

import axios from "axios"

const url="https://gold-gifted-ladybug.cyclic.app/"

// dispatch(Product())

const Product=(data)=> async (dispatch)=>{

        dispatch(type:PRODUCT_LOADING)

    try{

        let response=await axios.post(`${url}/product`,data)

        dispatch({type:PRODUCT_SUCCESS})

    }
    catch(err){
        dispatch({type:PRODUCT_FAILURE})
        return err.response.data
    }



}

module.exports={Product}