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
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { increment, decrement, incrementByAmount,saveAuthToken } = counterSlice.actions

export default counterSlice.reducer