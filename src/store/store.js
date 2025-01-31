import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../store/cartSlice'


export const store = configureStore({
    reducer: {
        'cart': cartSlice
    }
})