import axios from "axios";
import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT,
  ADMIN_SHOW_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
} from "./adminShowProduct.type";

const mainUrl = "https://gold-gifted-ladybug.cyclic.app";

export const adminShowProducts = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/product/`);
    console.log(res);
    dispatch({ type: ADMIN_SHOW_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

// get all product
export const adminProduct = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/product/allProdAdmin`);
    // console.log(res)
    dispatch({ type: ADMIN_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};
// delete product
export const adminDeleteProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/product/${id}`);
    dispatch({ type: ADMIN_DELETE_PRODUCT, payload: res.data });
    dispatch(adminShowProducts(page));
  } catch (error) {
    console.log(error);
  }
};

// one product
export const adminShowOneProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/product/${id}`);
    dispatch({ type: ADMIN_UPDATE_PRODUCT, payload: res.data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// update product
export const adminUpdateData = (id, data) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${mainUrl}/product/${id}`,
      data
    );
    dispatch({ type: ADMIN_UPDATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
