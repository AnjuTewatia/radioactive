import {
  PRODUCT_FAILURE,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./Product.actiontype";

import axios from "axios";

const url = "https://gold-gifted-ladybug.cyclic.app/";

// dispatch(Product())

export const Product =
  (category, page, priceSort, input) =>
  (dispatch) => {
    dispatch({ type: PRODUCT_LOADING });

    axios
      .get(
        `${url}/product?category=${category}&priceSort=${priceSort}&input=${input}&page=${page}`
      )
      .then((res) => dispatch({ type: PRODUCT_SUCCESS, payload: res.data }))
      .catch((e) => dispatch({ type: PRODUCT_FAILURE }));
  };
