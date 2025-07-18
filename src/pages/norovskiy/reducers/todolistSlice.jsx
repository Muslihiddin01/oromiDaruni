import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todolist',
	initialState: {
		data: [
			{
				id: '1',
				desc: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
				price: '2 491 ₽/шт.',
				img: '/src/pages/norovskiy/img/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (1).svg',
			},
			{
				id: '2',
				desc: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
				price: '3 200 ₽/шт.',
				img: '/src/pages/norovskiy/img/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (2).svg',
			},
			{
				id: '3',
				desc: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
				price: '1 345 ₽/шт.',
				img: '/src/pages/norovskiy/img/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (3).svg',
			},
			{
				id: '4',
				desc: 'Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3',
				price: '2 600 ₽/шт.',
				img: '/src/pages/norovskiy/img/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.svg',
			},
		],
	},
	reducers: {
		deleteUser: (state, action) => {
			state.data = state.data.filter(e => e.id != action.payload)
		},
		addUser: (state, action) => {
			state.data.push(action.payload)
		},
		 editUser: (state, action) => {
            state.data = state.data.map((e) => {
                if (e.id == action.payload.id) {
                    return action.payload
                }
                return e;
            })

        }
	}
})

export const { deleteUser, addUser, editUser } = todoSlice.actions
