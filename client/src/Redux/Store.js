import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import {Authreducer} from "../Redux/Auth/Auth.reducer"
import { ProductReducer } from "../Redux/Product/Product.reducer";

const rootReducer = combineReducers({ product: ProductReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
