import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  FETCH_CART_ITEM,
  SELECT_CART_ITEM,
} from "./constant";
import initialState from "./initialState";

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CART_ITEM:
      return [...state, { ...action.payload.item, counter: 1 }];
    case FETCH_CART_ITEM:
      return [...state];
    case ADD_CART_ITEM:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.counter += 1;
        }
        return item;
      });
    case DELETE_CART_ITEM:
      return state
        .map((item) => {
          if (item.id === action.payload.id) {
            item.counter -= 1;
          }
          return item;
        })
        .filter((item) => item.counter > 0);
    default:
      return state;
  }
};

export default cartReducers;
