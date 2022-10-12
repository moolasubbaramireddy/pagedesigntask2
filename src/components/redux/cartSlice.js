import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): []
}

const cartSlice = createSlice ({
    name:'cart',
    initialState,
    reducers: {
        addToCart : (state , action) => {
            const findItem = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            //console.log(findItem)
            if(findItem > -1){
                state.cartItems[findItem].quantity++
            }
            else{
                const newItem = {...action.payload, quantity:1}
                state.cartItems.push(newItem)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
           
        },
        removeFormCart:(state, action) => {
           const reminingItems = state.cartItems.filter((item)=>item.id !== action.payload.id)

           state.cartItems = reminingItems;
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})
export const {addToCart,removeFormCart} = cartSlice.actions

export default cartSlice.reducer;