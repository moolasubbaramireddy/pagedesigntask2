import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalAmount:0,
    cartTotalQuantity:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //console.log(findItem)
      if (findItem > -1) {
        state.cartItems[findItem].quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFormCart: (state, action) => {
      const reminingItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = reminingItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementCartItems: (state, action) => {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[findItem].quantity > 1) {
        state.cartItems[findItem].quantity--;
      }
       else if (state.cartItems[findItem].quantity === 1) {
        const reminingItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = reminingItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart : (state, action) =>{
        state.cartItems = [];
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    getTotals : (state, action) =>{
        const { totalPrice , totalQuantity } = state.cartItems.reduce((cartInfo , item) =>{
            const {price,quantity}= item;
            const total = price * quantity;

            cartInfo.totalPrice += total;
            cartInfo.totalQuantity += quantity;
            return cartInfo;

        },{totalPrice:0 , totalQuantity:0});
        state.cartTotalAmount = totalPrice;
        state.cartTotalQuantity = totalQuantity;
    }
  }
});
export const { addToCart, removeFormCart, decrementCartItems,clearCart , getTotals} =
  cartSlice.actions;

export default cartSlice.reducer;
