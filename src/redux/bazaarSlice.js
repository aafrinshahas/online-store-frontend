import { createSlice } from "@reduxjs/toolkit";
import { remove } from "firebase/database";

const initialState = {
    productData: [],
    userInfo: null,
};

export const bazaarSlice = createSlice({
    name: "bazaar",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )

            if(item){
             item.quantity = action.payload.quantity+1;
            }else{
                state.productData.push(action.payload) 
            }
           
        },
        deleteItem:(state, action)=>{
        state.productData = state.productData.filter(
            (item) => item._id !== action.payload
        )
        },
        resetCart: (state) => {
            state.productData = []
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if(item){
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
           if(item.quantity === 1){
            item.quantity = 1
           } else {
            item.quantity--
           }
        },
        addUser: (state, action) => {
            state.userInfo = action.payload
        },
        removeUser: (state) => {
            state.userInfo = null
        }


    }
});


export const {addToCart, deleteItem, resetCart, increamentQuantity, decrementQuantity, addUser, removeUser} = bazaarSlice.actions;
export default bazaarSlice.reducer;