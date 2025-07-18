import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState:{
        data:[
            {
                img:"./images/img1.png",
                name:"QR-кодом",
                text:"Оплата моментально поступает на счёт продавца и позволяет избежать кассовых разрывов.",
                id:1
            },
            {
                img:"./images/img2.png",
                name:"Наличными",
                text:"Прямая передача денег продавцу «из рук в руки».",
                id:2
            },
            {
                img:"./images/img3.png",
                name:"Безналичный расчет ",
                text:"Перевод осуществляется на основании указанных в реквизитах данных организации.",
                id:3
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