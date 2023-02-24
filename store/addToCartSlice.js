import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const initialState = {
    cartItems: Cookies.get("addtocart") ?  JSON.parse(Cookies.get("addtocart")) : []
 
}

const cartSlice = createSlice({ 
    name: "carts", 
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExcit = state.cartItems.find(item => item.id === action.payload.id)
            if (isExcit) {
                 toast.error("item is already existing",{ position: toast.POSITION.BOTTOM_CENTER}) 
                 return;
            } else {
                state.cartItems.push(action.payload) 
                Cookies.set("addtocart", JSON.stringify(state.cartItems))
                toast.success("item have successfully added", {position: "bottom-center",
                 autoClose: 2000, draggable: true,pauseOnHover: true, })
            }
            
        },
        deleteSlice: (state, action) => {
           const cartItemsAfterDeleting = state.cartItems.filter(item => item.id !== action.payload)
            state.cartItems = cartItemsAfterDeleting
          Cookies.set("addtocart", JSON.stringify(state.cartItems))
            toast.error("item have successfully deleted")
        },
        deleteAllCarts: (state) => {
            state.cartItems = []
            Cookies.set("addtocart", JSON.stringify(state.cartItems))
        }
    }
})


export const {addToCart, deleteSlice, deleteAllCarts} = cartSlice.actions
export default cartSlice.reducer