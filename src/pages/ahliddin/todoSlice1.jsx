import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo1",
    initialState:{
        data:[
            {
                img:"./images/image1.png",
                name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price: 1345,
                count:2,
                id:1
            },
            {
                img:"./images/image2.png",
                name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price:1345,
                count:1,
                id:2
            },
            {
                img:"./images/image3.png",
                name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price:1345,
                count:1,
                id:3
            },
            {
                img:"./images/image1.png",
                name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price:1345,
                count:2,
                id:4
            },
            {
                img:"./images/image2.png",
                name:"Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                price:1345,
                count:1,
                id:5
            }
        ]
    },
    reducers: {
        deleteUser: (state, actions)=>{
            state.data = state.data.filter((e) => e.id != actions.payload)
        },
        addNewUser: (state, actions)=>{
            state.data = [ ...state.data, actions.payload ]
        },
        editUser: (state, actions)=>{
            state.data = state.data.map((e) => {
                if (e.id == actions.payload.id) return actions.payload
                return e
            })
        }
    }
})
export let { deleteUser, addNewUser, editUser } = todoSlice.actions
export default todoSlice.reducer