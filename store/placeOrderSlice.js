import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"


const initialState = {
    placeOrderArray: Cookies.get("placeOrderCookies") ?  JSON.parse(Cookies.get("placeOrderCookies")) : []
 
}



const placeOrderSlice = createSlice({  
    name: "placeOrderName",  
    initialState,
    reducers: {
        placeOrderAction: (state, action) => {
      
      state.placeOrderArray = [action.payload]
        Cookies.set("placeOrderCookies", JSON.stringify(state.placeOrderArray))      
        },
      
      
    },
/*  extraReducers: {
        ['carts/addToCart']: (state) => {
            state.cartItems = []
        }
    }*/
})



export const {placeOrderAction} = placeOrderSlice.actions
export default placeOrderSlice.reducer