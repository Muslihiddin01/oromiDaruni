import React, { useState } from 'react'
import image1 from './imagefahim/Group 173 (1).png'
import image2 from './imagefahim/Group 173 (2).png'
import image3 from './imagefahim/Group 174 (1).png'
import image4 from './imagefahim/Group 174 (2).png'
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, deleteUser, editNewUser } from './reducer/todolost'




const Kontacti = () => {

  let dispatch = useDispatch()
  let data = useSelector((store) => store.todolist.data)

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    let [inpName,setInpName] = useState('')
    let [inpImg,setInpImg] = useState('')
    let [inpPrice,setInpPrice] = useState('')
  
    function add() {
      let newUser = {
        name : inpName,
        img : inpImg,
        price : inpPrice,
        id : Date.now()
      }
  
      dispatch(addNewUser(newUser))
      handleCancel()
  
    }
  
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    const showEditModal = () => {
      setIsEditModalOpen(true);
    };
  
    const handleEditOk = () => {
      setIsEditModalOpen(false);
    };
  
    const handleEditCancel = () => {
      setIsEditModalOpen(false);
    };
  
    let [inpEditName,setInpEditName] = useState('')
    let [inpEditImg,setInpEditImg] = useState('')
    let [inpEditPrice,setInpEditPrice] = useState('')
    let [idx,setIdx] = useState(null)
  
    function openDialog(e) {
      showEditModal()
      setInpEditName(e.name)
      setInpEditPrice(e.price)
      setInpEditImg(e.img)
      setIdx(e.id)
    }
  
    function edit() {
      let editUser = {
        name : inpEditName,
        price : inpEditPrice,
        img : inpEditImg,
        id : idx
      }
  
      dispatch(editNewUser(editUser))
      handleEditCancel()
  
    }

  return (
    <div>
          <Modal
              title="Basic Modal"
              closable={{ 'aria-label': 'Custom Close Button' }}
              open={isEditModalOpen}
              onOk={edit}
              onCancel={handleEditCancel}
            >
              <div>
                <input value={inpEditImg} onChange={(e) => setInpEditImg(e.target.value)} type="text" placeholder='Image...' className='border' />
                <input value={inpEditName} onChange={(e) => setInpEditName(e.target.value)} type="text" placeholder='Name...' className='border'  />
                <input value={inpEditPrice} onChange={(e) => setInpEditPrice(e.target.value)} type="text" placeholder='Price...' className='border'  />
              </div>
            </Modal>  


  <div className='hidden sm:block'>
  <div className='flex items-center justify-between p-[15px] mt-[80px]'>
    <h1 className='text-[#1E2126] font-[500] text-[40px]'>Контакты</h1>
    </div>


    <div>

      <div className='flex flex-col gap-[80px] mb-[130px]'>

        <div className='flex items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[320px] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Центральный офис и склад</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image1} alt="" />
        </div>

        <div className='flex items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[320px] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Офис и склад на Трактовой</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image2} alt="" />
        </div>

        <div className='flex items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[320px] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Центральный офис и склад</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image3} alt="" />
        </div>

        <div className='flex items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[320px] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Офис и склад на Трактовой</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image4} alt="" />
        </div>

      </div>

    </div>

        <div className='mb-[100px]'>
        <Button type="primary" onClick={showModal}>
            + Add New User
          </Button>
          <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={add}
            onCancel={handleCancel}
          >
            <div>
              <input value={inpImg} onChange={(e) => setInpImg(e.target.value)} type="text" placeholder='Image...' className='border' />
              <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder='Name...' className='border'  />
              <input value={inpPrice} onChange={(e) => setInpPrice(e.target.value)} type="text" placeholder='Price...' className='border'  />
            </div>
          </Modal>
        </div>
    
        <div className='flex items-center justify-between mb-[120px] flex-wrap gap-[35px]'>
        {data.map((e) => {
          return (
            <div key={e.id} className='w-[285px] p-[8px] shadow-xl flex flex-col items-center text-center h-[470px] justify-between'>
              <img className='w-[285px] h-[230px]' src={e.img} alt="" />
              <h1 className='text-[#1E2126] font-[500]'>{e.name}</h1>
              <h1 className='text-[#1D6BDD] font-bold text-[25px]'>{e.price}</h1>
              <div className='flex items-center gap-[25px]'>
                <button onClick={() => dispatch(deleteUser(e.id))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
              </div>
            </div>
          )
        })}
        </div>


    </div>






    <div className='sm:hidden'>

    <div className='flex items-center justify-between p-[15px] mt-[80px]'>
    <h1 className='text-[#1E2126] font-[500] text-[40px]'>Контакты</h1>
    </div>


    <div>

      <div className='flex flex-col mt-[30px] gap-[80px] mb-[130px]'>

        <div className='flex flex-col gap-[25px] items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[98%] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Центральный офис и склад</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image1} alt="" />
        </div>

        <div className='flex flex-col gap-[25px]  items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[98%] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Офис и склад на Трактовой</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image2} alt="" />
        </div>

        <div className='flex flex-col gap-[25px]  items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[98%] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Центральный офис и склад</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image3} alt="" />
        </div>

        <div className='flex flex-col gap-[25px]  items-center justify-between border-b-2 border-[#C7C7C7]'>
          <div className='w-[98%] flex flex-col items-start gap-[20px]'>
            <h2 className='text-[#1E2126] font-[600] text-[20px]'>Офис и склад на Трактовой</h2>
            <p className='text-[#707070] font-[500]'>📞 +7 (3952) 648-139</p>
            <p className='text-[#707070] font-[500]'>✉️ postav.irk@mail.ru</p>
            <p className='text-[#707070] font-[500]'>📶 +7(924) 626-33-40</p>
            <p className='text-[#707070] font-[500]'>✨ г. Иркутск ул. Ракитная стр 4 корп 11</p>
            <p className='text-[#707070] font-[500]'>⌚ Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</p>
          </div>
        <img className='w-[850px]' src={image4} alt="" />
        </div>

      </div>

    </div>

        <div className='mb-[100px]'>
        <Button type="primary" onClick={showModal}>
            + Add New User
          </Button>
          <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={add}
            onCancel={handleCancel}
          >
            <div>
              <input value={inpImg} onChange={(e) => setInpImg(e.target.value)} type="text" placeholder='Image...' className='border' />
              <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" placeholder='Name...' className='border'  />
              <input value={inpPrice} onChange={(e) => setInpPrice(e.target.value)} type="text" placeholder='Price...' className='border'  />
            </div>
          </Modal>
        </div>
    
        <div className='flex items-center justify-between mb-[120px] flex-col gap-[35px]'>
        {data.map((e) => {
          return (
            <div key={e.id} className='w-[98%] p-[8px] shadow-xl flex flex-col items-center text-center h-[70vh] justify-between'>
              <img className='w-[285px] h-[230px]' src={e.img} alt="" />
              <h1 className='text-[#1E2126] font-[500]'>{e.name}</h1>
              <h1 className='text-[#1D6BDD] font-bold text-[25px]'>{e.price}</h1>
              <div className='flex items-center gap-[25px]'>
                <button onClick={() => dispatch(deleteUser(e.id))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                <button onClick={() => openDialog(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg></button>
              </div>
            </div>
          )
        })}
        </div>



    </div>

    </div>
  )
}

export default Kontacti