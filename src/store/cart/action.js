import {
  FETCH_CART_ITEM,
  DELETE_CART_ITEM,
  SELECT_CART_ITEM,
  ADD_CART_ITEM,
} from "./constant";

export const fetchProduct = () => ({
  type: FETCH_CART_ITEM,
  payload: {},
});

export const deleteCartItem = (itemId) => ({
  type: DELETE_CART_ITEM,
  payload: {
    id: itemId,
  },
});

export const selectCartItem = (item) => ({
  type: SELECT_CART_ITEM,
  payload: {
    item,
  },
});

export const addCartItem = (id) => ({
  type: ADD_CART_ITEM,
  payload: {
    id,
  },
});
