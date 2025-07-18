import {configureStore} from '@reduxjs/toolkit'
import { todolist } from './todolist'
export const storeMuslim = configureStore({
    reducer:{
        todolist: todolist.reducer
    }
})