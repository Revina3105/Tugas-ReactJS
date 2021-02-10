import { FETCH_PRODUCTS, SELECT_PRODUCTS, DESELECT_PRODUCT } from "./constant";

export const fetchProduct = () => ({
  type: FETCH_PRODUCTS,
  payload: {},
});

export const deselectProduct = (product) => ({
  type: DESELECT_PRODUCT,
  payload: {
    product,
  },
});

export const selectProduct = (id) => ({
  type: SELECT_PRODUCTS,
  payload: {
    id,
  },
});
