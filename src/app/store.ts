import { configureStore } from "@reduxjs/toolkit";
import filterProductSlice  from "./feature/filterProductSlice";
import cartSlice from "./feature/cartSlice";
export const store = configureStore({
    reducer: {
        filterSort: filterProductSlice,
        cartSlice: cartSlice

    },
}) 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch