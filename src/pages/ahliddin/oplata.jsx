import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addNewUser, deleteUser, editUser } from "./todoSlice"
const Oplata = () => {
  let data = useSelector((state)=> state.todo.data)
  let [ addName, setAddName ] = useState("")
  let [ addText, setAddText ] = useState("")
  let [ editName, setEditName ] = useState("")
  let [ editText, setEditText ] = useState("")
  let [ idx, setIdx ] = useState("")
  let dispatch = useDispatch()
  function addUser() {
    let newUser = {
      name:addName,
      text:addText,
      id:Date.now()
    }
    dispatch(addNewUser(newUser))
  }
  function edit() {
    let updateUser = {
      name:editName,
      text:editText,
      id:idx
    }
    dispatch(editUser(updateUser))
  }
  return (
    <>
      <p className='text-[#707070]'>Главная <span className='text-[#167FFE] text-[50px]'>.</span> Оплата</p>
      <h1 className='text-[40px]'>Оплата</h1>
      <div className='flex gap-[20px] bg-[#EDEDED] p-[20px]'>
        <input className='p-[10px] bg-white' type="text" value={addName} placeholder='Add Name...' onChange={(e)=>setAddName(e.target.value)} />
        <input className='p-[10px] bg-white' type="text" value={addText} placeholder='Add Text...' onChange={(e)=>setAddText(e.target.value)} />
        <button onClick={addUser} className='bg-[#167FFE] text-white py-[5px] px-[20px]'>Add</button>
        <input className='p-[10px] bg-white' type="text" value={editName} onChange={(e)=>setEditName(e.target.value)} />
        <input className='p-[10px] bg-white' type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
        <button onClick={edit} className='bg-[#167FFE] text-white py-[5px] px-[20px]'>Save</button>
      </div>
      <section className='flex justify-between w-[100%] my-[30px]'>
        <aside className='w-[52%] flex flex-col gap-[20px]'>
          {data.map((e) => {
            let img = e.img
            return <div className='flex gap-10' key={e.id}>
              <img src={img} alt="" />
              <div className='flex flex-col justify-between h-[100px]'>
                <h3 className='text-[700] text-[20px]'>{e.name}</h3>
                <p className='text-[14px] text-[#707070]'>{e.text}</p>
              <div>
                <button className='bg-[#167FFE] text-white py-[5px] px-[20px]' onClick={()=>{ 
                  setEditName(e.name) 
                  setEditText(e.text) 
                  setIdx(e.id)
            }}>edit</button>
                <button className='bg-red-500 text-white py-[5px] px-[20px]' onClick={()=>dispatch(deleteUser(e.id))}>delete</button>
              </div>
              </div>
            </div>
          })}
        </aside>
        <aside className='w-[25%]'>
          <p className='text-[14px]'>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом. <br /><br />Противоположная точка зрения подразумевает, что независимые государства лишь добавляют фракционных разногласий и представлены</p>
        </aside>
        <aside className='w-[20%]'>
          <h4 className='text-[700] text-[20px]'>Платежные реквизиты:</h4>
          <p className='text-[14px]'>ООО "Поставщик"<br /><br />ИНН 7713522570 / КПП 771301001 <br /><br />Расчетный счет № 40702810400180000662 <br /><br />ОАО «Отп банк» г. Москва <br /><br />Кор. Счет № 30101810000000000311 <br /><br />БИК 044525311.</p>
        </aside>
      </section>
    </>
  )
}

export default Oplata