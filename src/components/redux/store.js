import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer:{
        products:ProductSlice,
        cart:cartSlice
    }
})
export default store;