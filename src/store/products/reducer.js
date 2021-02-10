import { FETCH_PRODUCTS, SELECT_PRODUCTS, DESELECT_PRODUCT } from "./constant";
import initialState from "./initialState";

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...state];
    case DESELECT_PRODUCT:
      console.log(action.payload.product);
      return [...state, action.payload.product];
    case SELECT_PRODUCTS:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
};

export default productReducers;
