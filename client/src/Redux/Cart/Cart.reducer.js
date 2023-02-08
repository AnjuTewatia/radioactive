import { ADD_ITEM_TO_CART, REMOVE_CART_ITEMS } from "./Cart.actiontypes";

const cartItems = [];

export const Cartreducer = (state = cartItems, { type, payload }) => {
  const product = payload;
  const exist = state.find((ele) => ele._id == product._id);
  switch (type) {
    case ADD_ITEM_TO_CART: {
      if (exist) {
        return state.map((ele) =>
          ele._id === product._id ? { ...ele, qty: ele.qty + 1 } : ele
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
    }
    case REMOVE_CART_ITEMS: {
      if (exist.qty === 1) {
        return state.filter((ele) => ele._id !== product._id);
      }
      if (exist) {
        return state.map((ele) =>
          ele._id === product._id ? { ...ele, qty: ele.qty - 1 } : ele
        );
      }
    }
    default:
      return state;
  }
};
