import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[]
}

const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducer:{
        addToCart:(state, action) => {
           console.log(action)
        }
    }
})
export const {addToCart} = cartSlice.actions

export default cartSlice.reducer