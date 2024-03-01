import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_SIGNUP,
  AUTH_LOGOUT,
} from "./Auth.actiontypes";

import axios from "axios";

const url = "https://rich-puce-abalone-gear.cyclic.app/";

export const Login = (data) => async (dispatch) => {
  try {
    await axios.post(`${url}/login`, data).then((res) =>
      dispatch({
        type: AUTH_SUCCESS,
        token: res.data.token,
        payload: res.data,
      })
    );

    // dispatch({type:AUTH_SUCCESS,token})
  } catch (err) {
    dispatch({ type: AUTH_FAILURE });
    return err.response.data;
  }
};

export const Signup = (data) => async (dispatch) => {
  try {
    await axios.post(`${url}/signup`, data).then((res) =>
      dispatch({
        type: AUTH_SIGNUP,
        token: res.data.token,
        payload: res.data,
      })
    );

    // dispatch({type:AUTH_SUCCESS,token})
  } catch (err) {
    dispatch({ type: AUTH_FAILURE });
    return err.response.data;
  }
};
export const Logout = () => {
  dispatch({ type: AUTH_LOGOUT });
};

// modules.export = { Login, Signup, Logout }; export
