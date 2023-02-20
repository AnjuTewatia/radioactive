import axios from "axios";
import { ADMIN_ADD_PRODUCT } from "./adminaddProduct.type";


const mainUrl = "https://dailybackend.onrender.com";


export const addProduct = (product) => async (dispatch) => {
  try {
    let res = await axios.post(`${mainUrl}/products/add`, product);
    dispatch({ type: ADMIN_ADD_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.msg);
  }
};
