import { createSlice } from "@reduxjs/toolkit";


const initialState:any = {
    value: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
   reducers:{
        profileData: (state, action) => {
            const newState = action.payload

            state.value = newState
        }
       
   }
})

export const {profileData} = profileSlice.actions
export default profileSlice.reducer