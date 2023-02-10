import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"


const initialState = {
    checkoutInfoItem: Cookies.get("checkoutInfo") ?  JSON.parse(Cookies.get("checkoutInfo")) : []
 
}



const checkoutInfoSlice = createSlice({ 
    name: "checkoutInfo",  
    initialState,
    reducers: {
        checkoutInfo: (state, action) => {
        state.checkoutInfoItem = []
        state.checkoutInfoItem.push(action.payload)
        Cookies.set("checkoutInfo", JSON.stringify(state.checkoutInfoItem))      
        },
        deleteCheckoutInfo: (state) => {
            state.checkoutInfoItem = []
            Cookies.set("checkoutInfo", JSON.stringify(state.checkoutInfoItem))
        }
      
    }
})


export const {checkoutInfo, deleteCheckoutInfo} = checkoutInfoSlice.actions
export default checkoutInfoSlice.reducer