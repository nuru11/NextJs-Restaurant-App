import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/addToCartSlice"
import checkoutInfoReducer from "./checkoutInfoSlice"
import placeOrderReducer from "./placeOrderSlice"

export const store = configureStore({
    reducer: {
     carts: cartReducer,
     checkoutInfo: checkoutInfoReducer,
     placeOrderName: placeOrderReducer,
    }
  })


export default store
