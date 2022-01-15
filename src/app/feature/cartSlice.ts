import { createSlice } from "@reduxjs/toolkit";

interface IDataCart {
    slug:string
    size: string,
    color: string,
    price: string,
    quantity: number,
    id: number
    title: string,
    img:string
}


const initialValue: Array<IDataCart> = localStorage.getItem("cart")! ? JSON.parse(localStorage.getItem("cart")!) : []





const initialState:any = {
    value: initialValue
}

export const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const newState = action.payload

            state.value = [...state.value,{
                ...newState,
                id: state.value.length > 0 ?  state.value.length + 1 : 1     
                 
            }]

           
           
            localStorage.setItem("cart", JSON.stringify(state.value))
        },
        removeItem: (state, action) => {
            
            state.value = state.value.filter((value:IDataCart) => value.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(state.value))
        }

        
    }

})


export const {addToCart, removeItem} = cartSlice.actions
export default cartSlice.reducer