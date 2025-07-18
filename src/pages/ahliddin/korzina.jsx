import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addNewUser, deleteUser, editUser } from "./todoSlice1"
const Korzina = () => {
  let data = useSelector((state)=> state.todo1.data)
  let [ addName, setAddName ] = useState("")
  let [ addPrice, setAddPrice ] = useState(0)
  let [ addCount, setAddCount ] = useState(1)
  let [ editName, setEditName ] = useState("")
  let [ editPrice, setEditPrice ] = useState(0)
  let [ editCount, setEditCount ] = useState(1)
  let [ editImg, setEditImg ] = useState(null)
  let [ idx, setIdx ] = useState("")
  let dispatch = useDispatch()
  function addUser() {
    let newUser = {
      img:"./images/image1.png",
      name:addName,
      price: addPrice,
      count:addCount,
      id:Date.now()
    }
    dispatch(addNewUser(newUser))
  }
  function edit() {
    let updateUser = {
      img:editImg,
      name:editName,
      price:editPrice,
      count:editCount,
      id:idx
    }
    dispatch(editUser(updateUser))
  }
  return (
    <>
      <p className='text-[#707070]'>Главная <span className='text-[#167FFE] text-[50px]'>.</span> Корзина</p>
      <h1 className='text-[40px]'>Корзина</h1>
      <section className='flex my-10 justify-between'>
        <aside className='w-[50%] flex flex-col gap-[50px]'>
          {data.map((e) => {
            return <article key={e.id} className='shadow-black shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-[100%] h-[90px] p-[10px] flex justify-between'>
              <img src={e.img} alt="" />
              <div className='flex flex-col justify-between'>
                <p>{e.name}</p>
                <div className='flex gap-[10px]'>
                  <p className='text-[#707070]'>{e.price} ₽/шт.</p>
                  <button className='border border-[#C7C7C7] px-[10px]'>-</button>
                  <p className='border border-[#C7C7C7] px-[10px]'>{e.count}</p>
                  <button className='border border-[#C7C7C7] px-[10px]'>+</button>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <button className='text-red-500 text-[25px]' onClick={()=>dispatch(deleteUser(e.id))}>X</button>
                <button className='bg-[#167FFE] text-white py-[5px] px-[20px]' onClick={()=>{
                  setEditName(e.name)
                  setEditPrice(e.price)
                  setEditCount(e.count)
                  setEditImg(e.img)
                  setIdx(e.id)
                }}>edit</button>
              </div>
            </article>
          })}
        </aside>
        <aside className='flex flex-col gap-[20px] bg-[#FFFFFF] shadow-black shadow-2xl w-[30%] items-center p-[20px]'>
          <h2 className='text-[25px] text-[700]'>Оформление заказа</h2>
          <input value={addName} onChange={(e)=>setAddName(e.target.value)} type="text" className='border border-[#C7C7C7] bg-[#FFFFFF] w-[80%] p-[10px]' placeholder='Имя' />
          <input value={addPrice} onChange={(e)=>setAddPrice(e.target.value)} type="text" className='border border-[#C7C7C7] bg-[#FFFFFF] w-[80%] p-[10px]' placeholder='Цена' />
          <input value={addCount} onChange={(e)=>setAddCount(e.target.value)} type="text" className='border border-[#C7C7C7] bg-[#FFFFFF] w-[80%] p-[10px]' placeholder='Колличество' />
          <button onClick={addUser} className='bg-[#167FFE] text-white py-[5px] px-[20px] w-[80%]'>Add</button>
          <input value={editName} onChange={(e)=>setEditName(e.target.value)} type="text" className='border border-[#C7C7C7] bg-[#FFFFFF] w-[80%] p-[10px]' placeholder='Имя' />
          <input value={editPrice} onChange={(e)=>setEditPrice(e.target.value)} type="text" className='border border-[#C7C7C7] bg-[#FFFFFF] w-[80%] p-[10px]' placeholder='Цена' />
          <input value={editCount} onChange={(e)=>setEditCount(e.target.value)} type="text" className='border border-[#C7C7C7] bg-[#FFFFFF] w-[80%] p-[10px]' placeholder='Колличество' />
          <button onClick={edit} className='bg-[#167FFE] text-white py-[5px] px-[20px] w-[80%]'>Save</button>
        </aside>
      </section>
    </>
  )
}

export default Korzina