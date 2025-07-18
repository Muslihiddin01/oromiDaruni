import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import todoSlice1 from './todoSlice1'
export const store = configureStore({
  reducer: {
    todo:todoSlice,
    todo1:todoSlice1
  },
})