import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    authToken: "",
  },
  reducers: {
    saveAuthToken:(state,action)=>
    {
        state.authToken=action.payload;
        console.log(state.authToken)
    },
  },
})
export const { saveAuthToken } = counterSlice.actions;

export default counterSlice.reducer;