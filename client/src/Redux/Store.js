
import {legacy_createStore,combineReducers,applyMiddleWare} from "redux"
import thunk from 'redux-thunk';
import {Authreducer} from "../Redux/Auth/Auth.reducer"
import {ProductReducer} from "../Redux/Product/Product.reducer"

const rootReducer=combineReducers({Authreducer,ProductReducer})

 export const store=legacy_createStore(rootReducer,applyMiddleWare(thunk))