import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    item:[],
    status:"idle",
    error:null
}

export const fetchProducts = createAsyncThunk ("products", async ( id=null , {rejectWithValue})=>{
    try{
        const responce = await axios.get("https://fakestoreapi.com/products")
        return responce.data;

    }catch (error){
        return rejectWithValue("sorry unable to fetch the data")
    }
})

 const ProductSlice= createSlice({
    name:"products",
    initialState,
    reducer:{},
    extraReducers(builder){
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.status = "Loading"
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = "success"
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected,(state, action)=>{
            state.status = "faild"
            state.error = action.error.message
        })
    }

})

export default ProductSlice.reducer