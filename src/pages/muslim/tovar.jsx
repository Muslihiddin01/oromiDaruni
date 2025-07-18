import React, { useState } from "react";
import { Button, Checkbox, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, deleteUser, editUser, changeStatus } from "./todolist";
const Tovar = () => {
  const gray = "text-[#707070]";
  let data = useSelector((store) => store.todolist.data);
  let dispatch = useDispatch();

  // add
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
  };

  let [inpAddImg, setInpAddImg] = useState("");
  let [inpAddName, setInpAddName] = useState("");
  let [inpAddPrice, setInpAddPrice] = useState("");
  let [inpAddStatus, setInpAddStatus] = useState("");

  function add() {
    let newUser = {
      img: inpAddImg,
      name: inpAddName,
      price: inpAddPrice,
      status: inpAddStatus == "active" ? true : false,
      id: Date.now(),
    };
    dispatch(addNewUser(newUser));
    setIsModalOpenAdd(false);
  }

  // edit
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };

  let [inpEditImg, setInpEditImg] = useState("");
  let [inpEditName, setInpEditName] = useState("");
  let [inpEditPrice, setInpEditPrice] = useState("");
  let [inpEditStatus, setInpEditStatus] = useState("");
  let [idx, setIdx] = useState(null);

  function openEditDialog(e) {
    setIdx(e.id);
    setInpEditImg(e.img);
    setInpEditName(e.name);
    setInpEditPrice(e.price);
    setInpEditStatus(e.status ? "active" : "inactive");
    setIsModalOpenEdit(true);
  }

  function edit() {
    dispatch(
      editUser({
        idx: idx,
        img: inpEditImg,
        name: inpEditName,
        price: inpEditPrice,
        status: inpEditStatus == "active" ? true : false,
      })
    );
    setIsModalOpenEdit(false);
  }
  return (
    <div>
      {/* // add  */}
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenAdd}
        onOk={add}
        onCancel={handleCancelAdd}
      >
        <article className="flex flex-col gap-3">
          <Input
            placeholder="Img..."
            value={inpAddImg}
            onChange={(e) => setInpAddImg(e.target.value)}
          />
          <Input
            placeholder="Name..."
            value={inpAddName}
            onChange={(e) => setInpAddName(e.target.value)}
          />
          <Input
            placeholder="Price..."
            value={inpAddPrice}
            onChange={(e) => setInpAddPrice(e.target.value)}
          />
          <select
            className="border-1 border-gray-300 p-[6px] rounded-sm"
            value={inpAddStatus}
            onChange={(e) => setInpAddStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </article>
      </Modal>

      {/* // edit  */}
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenEdit}
        onOk={edit}
        onCancel={handleCancelEdit}
      >
        <article className="flex flex-col gap-3">
          <Input
            placeholder="Img..."
            value={inpEditImg}
            onChange={(e) => setInpEditImg(e.target.value)}
          />
          <Input
            placeholder="Name..."
            value={inpEditName}
            onChange={(e) => setInpEditName(e.target.value)}
          />
          <Input
            placeholder="Price..."
            value={inpEditPrice}
            onChange={(e) => setInpEditPrice(e.target.value)}
          />
          <select
            className="border-1 border-gray-300 p-[6px] rounded-sm"
            value={inpEditStatus}
            onChange={(e) => setInpEditStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </article>
      </Modal>

      <ul className="text-[#707070] flex flex-wrap gap-6 items-center my-10">
        <li>Главная</li>
        <li className="list-disc marker:text-[#287FE8]">Каталог</li>
        <li className="list-disc marker:text-[#287FE8]">
          Изоляционные материалы
        </li>
        <li className="list-disc marker:text-[#287FE8]">
          Утеплитель ТеплоKnauf Стена плита 50 мм 6 м²
        </li>
      </ul>

      <main className="my-10">
        <h2 className="md:text-4xl text-2xl font-bold">
          Утеплитель ТеплоKnauf Стена плита 50 мм 6 м²
        </h2>
        <section className="flex flex-col md:flex-row items-center md:items-stretch gap-5 mt-10">
          <img src="/imgMuslim/img1.png" className="hidden md:block" alt="" />

          <img src="/imgMuslim/bread.png" alt="" />

          <section className="w-full">
            <article className="border border-gray-200 rounded-lg p-4 max-w-sm flex flex-col items-center ">
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Цена за штуку</p>
                <p className="text-2xl text-[#287FE8] font-bold">1 232 ₽</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Уменьшить количество"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-300">1</span>
                  <button
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Увеличить количество"
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                В КОРЗИНУ
              </button>
            </article>
          </section>
          <section className="flex flex-col gap-5 md:gap-16">
            <article aria-labelledby="size-options-heading">
              <h2
                id="size-options-heading"
                className="text-sm text-gray-600 mb-2"
              >
                Ширина в мм
              </h2>
              <div role="group" aria-label="Выберите ширину">
                <ul className="flex gap-2 list-none p-0 m-0">
                  {[50, 100, 150, 200].map((size) => (
                    <li key={size}>
                      <button
                        type="button"
                        className="border border-gray-300 rounded-md px-4 py-2 
                      hover:bg-gray-50 focus:outline-none focus:ring-2 
                      focus:ring-blue-500 focus:border-blue-500
                      transition-colors duration-200"
                        aria-label={`Ширина ${size} мм`}
                        tabIndex={0}
                      >
                        {size}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article aria-labelledby="size-options-heading">
              <h2
                id="size-options-heading"
                className="text-sm text-gray-600 mb-2"
              >
                Кол-во шт. в упаковке
              </h2>
              <div role="group" aria-label="Выберите ширину">
                <ul className="flex gap-2 list-none p-0 m-0">
                  {[50, 100, 150, 200].map((size) => (
                    <li key={size}>
                      <button
                        type="button"
                        className="border border-gray-300 rounded-md px-4 py-2 
                           hover:bg-gray-50 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500
                           transition-colors duration-200"
                        aria-label={`Ширина ${size} мм`}
                        tabIndex={0}
                      >
                        {size}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article aria-labelledby="size-options-heading">
              <h2
                id="size-options-heading"
                className="text-sm text-gray-600 mb-2"
              >
                Кол-во шт. в упаковке
              </h2>
              <div role="group" aria-label="Выберите ширину">
                <ul className="flex gap-2 list-none p-0 m-0">
                  {[50, 100, 150, 200].map((size) => (
                    <li key={size}>
                      <button
                        type="button"
                        className="border border-gray-300 rounded-md px-4 py-2 
                           hover:bg-gray-50 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-blue-500
                           transition-colors duration-200"
                        aria-label={`Ширина ${size} мм`}
                        tabIndex={0}
                      >
                        {size}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </section>
        </section>
      </main>

      <main className="my-10 flex flex-col gap-7">
        <h2 className="font-bold md:text-4xl text-2xl">Описание</h2>
        <p className={gray}>
          Минеральный утеплитель ТеплоKNAUF Стена Extra разработан специально
          для теплоизоляции наружных каркасных стен.Изготовлен из натуральных
          природных компонентов, в его составе не содержится
          фенол-формальдегидных и акриловых смол, это безопасный материал. Он не
          колется и не вызывает зуда при монтаже, мало пылит и мягкий на ощупь,
          без неприятных запахов. В том числе поэтому утеплитель ТеплоKNAUF
          Стена Extra рекомендуется применять для детских комнат или спален.
        </p>
        <h3 className="text-xl font-bold">Особенности</h3>
        <p className={gray}>
          Простота и удобство в работе: материал легко режется, отлично
          монтируется враспор между стойками каркаса. Материал благодаря своей
          упругости и прочности держится в конструкции, не спадая и не оседая
          Формат – плита, толщина материала – 50 мм. Размер плиты удобен для
          монтажа силами одного человека Долговечность: срок службы не менее 50
          лет. Компактно упакован: материал сжат в упаковке для более
          экономичной транспортировки и хранения. Подобная пачка содержит на 11%
          больше изоляции, чем обычная упаковка несжатой изоляции. Защищен от
          влаги за счет гидрофобизирующей технологии Aquastatik Не горит и не
          выделяет резкого удушливого дыма Произведен в России.
        </p>
        <h3 className="text-xl font-bold">
          Способ установки при утеплении наружных каркасных стен:
        </h3>
        <p>
          Для фиксации утеплителя рекомендуется монтировать каркас с шагом между
          стойками – 590 мм в свету. Утеплитель устанавливается в каркас с
          поджатием по ширине 10-15 мм. Если каркас металлический, профиль также
          нужно заполнять утеплителем. Каждый последующий слой утеплителя
          монтируется с перекрытием стыков. Теплоизоляция должна плотно
          прилегать к элементам конструкции и монтироваться враспор. Не должно
          быть щелей и зазоров. Установка снаружи здания ветро-гидрозащитной
          мембраны. Она раскатывается по каркасу и фиксируется с помощью шурупов
          по стойкам металлического каркаса или строительным степлером – к
          деревянному. Мембрана устанавливается снизу вверх, каждый последующий
          слой – выше предыдущего, внахлест - 10-15 см. Стыки рекомендуется
          проклеивать строительной лентой. Установка прижимного бруса для
          создания вентиляционного зазора. Монтаж внешней отделки фасада
          согласно рекомендациям производителя. Установка внутри здания
          пароизоляционной пленки. Она раскатывается по каркасу и фиксируется с
          помощью шурупов по стойкам металлического каркаса или строительным
          степлером – к деревянному. Пленка устанавливается снизу вверх, каждый
          последующий слой – выше предыдущего, внахлест - 10-15 см. Стыки, места
          крепления и поврежденные области обязательно проклеивать строительной
          лентой.
        </p>
        <h2 className="md:text-4xl text-2xl font-bold">Характеристики</h2>
        <section className="grid md:grid-cols-2  md:gap-16 gap-7">
          <article className="flex flex-col gap-3">
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">
                Площадь покрытия продуктом (м²)
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>6</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Толщина (мм)</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>50</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">
                Плотность (кг/м³)
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>22</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">
                Группа горючести
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>Негорючий</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full min-w-[310px] text-[#707070]">
                Коэффициент теплопроводности (Вт/м°С)
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>0.034</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">
                Место использования
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>Внутренний</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Назначение</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p className="w-full max-w-fit">Каркасная стена, Стяжка пола</p>
            </div>
          </article>

          <article className="flex flex-col gap-3">
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Длина (м)</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>1</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Ширина (м)</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>0.6</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Объем (м³)</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>0.3</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Вес, кг</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>8.46</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">
                Основной материал
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>Стекловата</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">Тип продукта</p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p className="w-full max-w-fit">Минеральная вата</p>
            </div>
            <div className="flex items-center gap-3 max-w-screen ">
              <p className="w-full max-w-fit text-[#707070]">
                Количество матов в упаковке (шт)
              </p>
              <div className="h-[1.5px] w-full bg-[radial-gradient(circle,_#C7C7C7_3px,_transparent_1px)] [background-size:10px_1px]"></div>
              <p>10</p>
            </div>
          </article>
        </section>
      </main>

      <main className="my-20 flex flex-col gap-7 items-center">
        <h2 className="md:text-4xl text-2xl font-bold">С этим товаром покупают</h2>
        <Button
          className="self-end"
          type="primary"
          onClick={() => setIsModalOpenAdd(true)}
        >
          Open Modal
        </Button>
        <section className="grid md:grid-cols-4 gap-7">
          {data.map((e) => (
            <article
              key={e.id}
              className="flex flex-col gap-3 text-center items-center shadow-lg relative"
            >
              <img src={e.img} className="w-full h-[237px]" alt={e.name} />
              <div className="flex flex-col gap-3 p-3">
                <img
                  src="/imgMuslim/line.png"
                  className="mt-3 w-1/2 mx-auto"
                  alt=""
                />
                <h3 className={e.status ? "" : "text-red-500 line-through"}>
                  {e.name}
                </h3>
                <h2 className="text-2xl font-bold text-[#1D6BDD]">
                  {e.price} ₽/шт.
                </h2>
                <section className="grid grid-cols-4 gap-5 items-center justify-between mt-3">
                  <p className="border-1 border-[#C7C7C7] h-10 flex items-center justify-center">
                    <i className="fa-solid fa-minus"></i>
                  </p>
                  <p className="text-xl border-1 border-[#C7C7C7] h-10 flex items-center justify-center">
                    1
                  </p>
                  <p className="border-1 border-[#C7C7C7] h-10 flex items-center justify-center">
                    <i className="fa-solid fa-plus"></i>
                  </p>
                  <i className="fa-brands fa-opencart border-1 border-[#C7C7C7] h-10 flex items-center justify-center bg-[#1D6BDD] text-white"></i>
                </section>
              </div>
              <div className="absolute top-3 right-3 text-xl flex items-center gap-3">
                <i
                  onClick={() => dispatch(deleteUser(e.id))}
                  className="fa-solid fa-trash-can text-red-500 cursor-pointer"
                ></i>
                <i
                  onClick={() => openEditDialog(e)}
                  className="fa-solid fa-pen text-blue-500 cursor-pointer"
                ></i>
                <Checkbox
                  checked={e.status}
                  onChange={() => dispatch(changeStatus(e.id))}
                />
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Tovar;
