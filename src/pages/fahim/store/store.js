import { configureStore } from "@reduxjs/toolkit"
import { todoListSlice } from "../reducer/todolost"

export const store = configureStore({
    reducer : {
        todolist : todoListSlice.reducer
    }
})