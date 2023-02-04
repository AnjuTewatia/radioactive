
import {AUTH_FAILURE,AUTH_LOADING,AUTH_SUCCESS,AUTH_LOGOUT} from "./Auth.actiontypes"

const initailState ={ loading :false,error:false isAuth:false,token:"",data:{} 

}

const Authreducer=(state=initailState,action) =>
{
    switch (action.type) {
        case AUTH_LOADING :{
            return {
                ...state,loading:true,
                error:false
            }
            
        }

        case AUTH_SUCCESS :{
            return {
                ...state,loading:false,
                error:false,token:action.token,
                isAuth:true,
                data:action.user
            }
        }

        case AUTH_FAILURE :{
            return {
                ...state,loading:false,
                error:true
            }
        }

        case AUTH_LOGOUT :{
            return {
                ...state,...initailState
            }
        }
            
          
    
        default:
            return state;
    }
    
}

module.exports={Authreducer} 