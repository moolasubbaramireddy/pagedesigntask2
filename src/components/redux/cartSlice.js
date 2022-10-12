import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[]
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
           
        }
    }
})
export const {addToCart} = cartSlice.actions

export default cartSlice.reducer;