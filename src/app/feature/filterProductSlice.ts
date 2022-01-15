import { createSlice } from "@reduxjs/toolkit";
import IProduct from '../../interface/IProduct'
import Product from "../../acesse/fakeData/Product";

const initialState:any = {
    value: Product,
}

export const filterProductSlice = createSlice({
    name: 'filterSort',
    initialState,
   reducers:{
        lowToHigh: (state,action) => {
            const newState = action.payload
           state.value = newState.slice().sort((a:IProduct,b:IProduct) => Number(a.price) - Number(b.price))
         
        },
        highToLow: (state,action) => {
            const newState = action.payload
           state.value = newState.slice().sort((a:IProduct,b:IProduct) => Number(b.price) - Number(a.price))
        },
       
   }
  })

  

  export const { lowToHigh, highToLow} = filterProductSlice.actions
  export default filterProductSlice.reducer