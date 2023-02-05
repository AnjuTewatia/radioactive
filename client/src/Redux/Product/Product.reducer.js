
import {Product} from "./Product.action"
import {PRODUCT_FAILURE,PRODUCT_LOADING,PRODUCT_SUCCESS} from "./Product.actiontype"

const initailState={
    product:[],
    loading:false,
    error:false
}



 export const ProductReducer=(state=initailState,{type,payload}) =>{

    switch (type) {
        case PRODUCT_LOADING:
            {
                return {
                    ...state,loading:true
                }
            }

            
          case PRODUCT_SUCCESS:{
            return{
                ...state,loading:false,
                product:payload,
                error:false

            }
          }
          case PRODUCT_FAILURE :{
            return {
                ...state,loading:false,
                error:true
            }
          }


    
        default:
            return state;
    }

}

