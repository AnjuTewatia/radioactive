import { ADD_ITEM_TO_CART, REMOVE_CART_ITEMS } from "./Cart.actiontypes";

export const addcart = (payload) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  };
};
export const removecart = (payload) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload,
  };
};
