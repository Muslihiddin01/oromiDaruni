import { createSlice } from "@reduxjs/toolkit";

export const todolist = createSlice({
  name: "todolist",
  initialState: {
    data: [
      {
        img: "/imgMuslim/todo2.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "2 491",
        status: true,
        id: "1",
      },
      {
        img: "/imgMuslim/todo1.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "3 200",
        status: false,
        id: "2",
      },
      {
        img: "/imgMuslim/todo4.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "1 345",
        status: true,
        id: "3",
      },
      {
        img: "/imgMuslim/todo3.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "2 600",
        status: true,
        id: "4",
      },
      {
        img: "/imgMuslim/todo1.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "3 200",
        status: false,
        id: "5",
      },
      {
        img: "/imgMuslim/todo2.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "2 491",
        status: true,
        id: "6",
      },
      {
        img: "/imgMuslim/todo3.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "2 600",
        status: true,
        id: "7",
      },
      {
        img: "/imgMuslim/todo4.png",
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        price: "1 345",
        status: true,
        id: "8",
      },
    ],
  },
  reducers: {
    deleteUser: (state, action) => {
      state.data = state.data.filter((e) => e.id != action.payload);
    },
    addNewUser: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    editUser: (state, action) => {
      state.data = state.data.map((e) => {
        if (e.id === action.payload.idx) {
          return {
            ...e,
            img: action.payload.img,
            name: action.payload.name,
            price: action.payload.price,
            status: action.payload.status,
          };
        }
        return e;
      });
    },
    changeStatus: (state, action) => {
      state.data = state.data.map((e) => {
        if (e.id === action.payload) {
          return {
            ...e,
            status: !e.status,
          };
        }
        return e;
      });
    },
  },
});

export const { deleteUser, addNewUser, editUser, changeStatus } =
  todolist.actions;
