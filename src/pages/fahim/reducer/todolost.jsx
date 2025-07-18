import { createSlice } from "@reduxjs/toolkit";
import image1 from '../imagefahim/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png'
import image2 from '../imagefahim/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (1).png'
import image3 from '../imagefahim/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (2).png'
import image4 from '../imagefahim/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (3).png'


export const todoListSlice = createSlice({
    name : "todolist",
    initialState : {
        data : [
            {
                img : image1,
                name : "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price : "2 491 ₽/шт.",
                id : "1"
            },
            {
                img : image2,
                name : "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price : "3 200 ₽/шт.",
                id : "2"
            },
            {
                img : image3,
                name : "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price : "1 345 ₽/шт.",
                id : "3"
            },
            {
                img : image4,
                name : "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price : "2 600 ₽/шт.",
                id : "4"
            }
        ]
    },
    reducers : {
        deleteUser : (state,action) => {
            state.data = state.data.filter((e) => e.id != action.payload)
        },
        addNewUser : (state,action) => {
            state.data = [...state.data,action.payload]
        },
        editNewUser : (state,action) => {
            state.data = state.data.map((e) => {
                if(e.id == action.payload.id) {
                    return {
                        ...e,
                        name : action.payload.name,
                        price : action.payload.price,
                    img : action.payload.img,
                    }
                }
                return e
            })
        }
    }
})

export let {deleteUser , addNewUser , editNewUser} = todoListSlice.actions