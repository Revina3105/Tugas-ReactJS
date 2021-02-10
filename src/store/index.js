import { createStore, combineReducers } from "redux";
import productReducers from "./products/reducer";
import cartReducers from "./cart/reducer";

const rootReducer = combineReducers({
  products: productReducers,
  cart: cartReducers,
});

export default createStore(rootReducer);
