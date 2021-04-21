import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Reducer'

export default configureStore({
  reducer: {
    counter: counterSlice,

  },
})