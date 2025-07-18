import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, editUser, deleteUser } from './reducers/todolistSlice'

const Postavshic = () => {
	let data = useSelector(store => store.todolist.data)
	let [AddDesc, setAddDesc] = useState('')
	let [AddPrice, setAddPrice] = useState('')
	let [EditeDesc, setEditeDesc] = useState('')
	let [EditePrice, setEditePrice] = useState('')
	let [idx, setIdx] = useState(null)
	let dispatch = useDispatch()

	function handleAdd() {
		let newUser = {
			desc: AddDesc,
			price: AddPrice,
			img: '/src/pages/norovskiy/img/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (13).svg',
			id: Date.now(),
		}
		dispatch(addUser(newUser))
		setAddDesc('')
		setAddPrice('')
	}

	function getEditeInfo(e) {
		setEditeDesc(e.desc)
		setEditePrice(e.price)
		setIdx(e.id)
	}

	function EditeUser() {
		let edited = {
			img: '/src/pages/norovskiy/img/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (1).svg',
			desc: EditeDesc,
			price: EditePrice,
			id: idx,
		}
		dispatch(editUser(edited))
		setEditeDesc('')
		setEditePrice('')
	}

	return (
		<div>
			<img src='/src/pages/norovskiy/img/Баннер.svg' alt='' />

			<div className='my-20'>
				<div className='flex justify-between mb-10'>
					<h1 className='text-3xl'>Теплоизоляция</h1>
					<button className='bg-[#167FFE] text-white sm:px-10 px-5 shadow-2xl'>
						Смотреть все
					</button>
				</div>
			<div className="sm:flex justify-between my-5">
        	<div className="">
            <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={AddDesc}
					onChange={e => setAddDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={AddPrice}
					onChange={e => setAddPrice(e.target.value)}
				/>
				<button onClick={handleAdd} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
          </div>
				<div className="">
          <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={EditeDesc}
					onChange={e => setEditeDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={EditePrice}
					onChange={e => setEditePrice(e.target.value)}
				/>
          
				<button onClick={EditeUser} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
        </div>
      </div>
				<div className='flex gap-8 flex-wrap'>
					{data.map(e => {
						return (
							<div className='sm:w-[23%] shadow-2xl p-2' key={e.id}>
								<center>
								<img src={e.img} alt='' />
									<h1>{e.desc}</h1>
									<h2 className='text-[#167FFE] font-bold text-2xl my-3'>
										{e.price}
									</h2>
								</center>
								<div className='flex justify-evenly'>
									<button
										className='bg-red-500 text-white px-5 py-1 shadow-2xl'
										onClick={() => dispatch(deleteUser(e.id))}
									>
										Delete
									</button>
									<button
										onClick={() => getEditeInfo(e)}
										className='bg-[#167FFE] text-white px-5 py-1 shadow-2xl'
									>
										{' '}
										Edit
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

      
          <div className='my-20'>
				<div className='flex justify-between mb-10'>
					<h1 className='text-3xl'>Строительные блоки</h1>
					<button className='bg-[#167FFE] text-white sm:px-10 px-5 shadow-2xl'>
						Смотреть все
					</button>
				</div>
			<div className="sm:flex justify-between my-5">
        	<div className="">
            <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={AddDesc}
					onChange={e => setAddDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={AddPrice}
					onChange={e => setAddPrice(e.target.value)}
				/>
				<button onClick={handleAdd} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
          </div>
				<div className="">
          <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={EditeDesc}
					onChange={e => setEditeDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={EditePrice}
					onChange={e => setEditePrice(e.target.value)}
				/>
          
				<button onClick={EditeUser} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
        </div>
      </div>
				<div className='flex gap-8 flex-wrap'>
					{data.map(e => {
						return (
							<div className='sm:w-[23%] shadow-2xl p-2' key={e.id}>
								<center>
								<img src={e.img} alt='' />
									<h1>{e.desc}</h1>
									<h2 className='text-[#167FFE] font-bold text-2xl my-3'>
										{e.price}
									</h2>
								</center>
								<div className='flex justify-evenly'>
									<button
										className='bg-red-500 text-white px-5 py-1 shadow-2xl'
										onClick={() => dispatch(deleteUser(e.id))}
									>
										Delete
									</button>
									<button
										onClick={() => getEditeInfo(e)}
										className='bg-[#167FFE] text-white px-5 py-1 shadow-2xl'
									>
										{' '}
										Edit
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

       <div className='my-20'>
				<div className='flex justify-between mb-10'>
					<h1 className='text-3xl'>Листовые материалы</h1>
					<button className='bg-[#167FFE] text-white sm:px-10 px-5 shadow-2xl'>
						Смотреть все
					</button>
				</div>
			<div className="sm:flex justify-between my-5">
        	<div className="">
            <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={AddDesc}
					onChange={e => setAddDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={AddPrice}
					onChange={e => setAddPrice(e.target.value)}
				/>
				<button onClick={handleAdd} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
          </div>
				<div className="">
          <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={EditeDesc}
					onChange={e => setEditeDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={EditePrice}
					onChange={e => setEditePrice(e.target.value)}
				/>
          
				<button onClick={EditeUser} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
        </div>
      </div>
				<div className='flex gap-8 flex-wrap'>
					{data.map(e => {
						return (
							<div className='sm:w-[23%] shadow-2xl p-2' key={e.id}>
								<center>
								<img src={e.img} alt='' />
									<h1>{e.desc}</h1>
									<h2 className='text-[#167FFE] font-bold text-2xl my-3'>
										{e.price}
									</h2>
								</center>
								<div className='flex justify-evenly'>
									<button
										className='bg-red-500 text-white px-5 py-1 shadow-2xl'
										onClick={() => dispatch(deleteUser(e.id))}
									>
										Delete
									</button>
									<button
										onClick={() => getEditeInfo(e)}
										className='bg-[#167FFE] text-white px-5 py-1 shadow-2xl'
									>
										{' '}
										Edit
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

       <div className='my-20'>
				<div className='flex justify-between mb-10'>
					<h1 className='text-3xl'>Кровля и водосток</h1>
					<button className='bg-[#167FFE] text-white sm:px-10 px-5 shadow-2xl'>
						Смотреть все
					</button>
				</div>
			<div className="sm:flex justify-between my-5">
        	<div className="">
            <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={AddDesc}
					onChange={e => setAddDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={AddPrice}
					onChange={e => setAddPrice(e.target.value)}
				/>
				<button onClick={handleAdd} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
          </div>
				<div className="">
          <input
        className='border py-1 px-2'
					type='text'
					placeholder='Name'
					value={EditeDesc}
					onChange={e => setEditeDesc(e.target.value)}
				/>
				<input
        className='border py-1 px-2'
					type='text'
					placeholder='Age'
					value={EditePrice}
					onChange={e => setEditePrice(e.target.value)}
				/>
          
				<button onClick={EditeUser} className='bg-blue-500 text-white px-5 py-1 shadow-2xl'>Save</button>
        </div>
      </div>
				<div className='flex gap-8 flex-wrap'>
					{data.map(e => {
						return (
							<div className='sm:w-[23%] shadow-2xl p-2' key={e.id}>
								<center>
								<img src={e.img} alt='' />
									<h1>{e.desc}</h1>
									<h2 className='text-[#167FFE] font-bold text-2xl my-3'>
										{e.price}
									</h2>
								</center>
								<div className='flex justify-evenly'>
									<button
										className='bg-red-500 text-white px-5 py-1 shadow-2xl'
										onClick={() => dispatch(deleteUser(e.id))}
									>
										Delete
									</button>
									<button
										onClick={() => getEditeInfo(e)}
										className='bg-[#167FFE] text-white px-5 py-1 shadow-2xl'
									>
										{' '}
										Edit
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

		</div>
	)
}

export default Postavshic
