import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import {Authreducer} from "../Redux/Auth/Auth.reducer"
import { ProductReducer } from "../Redux/Product/Product.reducer";
import { Cartreducer } from "../Redux/Cart/Cart.reducer";
import { Authreducer } from "../Redux/Auth/Auth.reducer";
import { adminAddProductReducer } from "./AdminAddProduct/adminaddProduct.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/adminShowProduct.reducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: Cartreducer,
  auth: Authreducer,
  adminAddProduct: adminAddProductReducer,
  adminShowProduct: adminShowProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
