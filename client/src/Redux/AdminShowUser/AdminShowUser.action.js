import axios from "axios";
import { ADMIN_DELETE_USER, ADMIN_GET_ALL_USER } from "./AdminShowUser.type";

const mainUrl = "https://dailybackend.onrender.com";
const token = localStorage.getItem("AdminToken");

export const getAllUser = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/alluser/add`);
    dispatch({ type: ADMIN_GET_ALL_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const adminDeleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/alluser/delete/${id}`);
    dispatch({ type: ADMIN_DELETE_USER, payload: res.data });
    dispatch(getAllUser());
  } catch (error) {
    console.log(error);
  }
};
