import React from "react";
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      {/* // Narasen Layout !!! */}
      {/* // Narasen Layout !!! */}
      {/* // Narasen Layout !!! */}
      {/* // Narasen Layout !!! */}
      <header>
        <nav className="md:flex items-center justify-between p-5 shadow-2xl ">
          <article className="flex items-center gap-7">
            <Link to={"/"}>
              <img src="logo.png" alt="logo" />
            </Link>
            <Link to={"/katalog"}>
              <p className="text-[#707070]">От завода без посредников</p>
            </Link>
          </article>
          <ul className="text-[#0A61DE] font-semibold md:flex grid grid-cols-3 items-center gap-12 mt-7 md:mt-0">
            <Link to={"/tovar"}>
              <li>Доставка</li>
            </Link>
            <Link to={"/politika"}>
              <li>Оплата</li>
            </Link>
            <Link to={"/dostavka"}>
              <li>Контакты</li>
            </Link>
            <Link to={"/stoimost"}>
              <div className="flex items-center gap-2 justify-self-end">
                <i className="fa-solid fa-phone"></i>
                <p className="font-bold text-xl text-black hidden md:block">
                  8-800-550-01-09
                </p>
              </div>
            </Link>
            <Link to={"/kontacti"} className="justify-self-end">
              <i className="fa-brands fa-opencart"></i>
            </Link>
          </ul>
        </nav>

        <nav className="flex flex-col md:flex-row md:items-center justify-between md:gap-16 gap-5 bg-[#EDEDED] px-5 py-3 shadow-2xl text-lg">
          <Link to={"/oplata"}>
            <button className="py-2 bg-[#167FFE] text-white flex items-center justify-center w-full md:w-fit gap-3 px-7 rounded-sm">
              <i className="fa-solid fa-bars"></i>
              Каталог
            </button>
          </Link>
          <div className="w-full bg-white flex ">
            <input
              type="text"
              placeholder="Поиск"
              className="p-1 w-full outline-none px-3"
            />
            <i className="fa-solid fa-magnifying-glass text-white bg-[#167FFE] text-lg transform rotate-90 p-3"></i>
          </div>
          <Link to={"/korzina"}>
            <div className="flex items-center gap-3 justify-center">
              <i className="fa-solid fa-location-dot text-2xl text-[#0A61DE]"></i>
              <p className="text-sm">Иркутск</p>
              <i className="fa-solid fa-chevron-down text-sm text-[#287FE8]"></i>
            </div>
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className=" text-white py-8 px-4 sm:px-6 lg:px-8 bg-[#1E2126]">
        <main className="max-w-7xl mx-auto">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="space-y-4">
              <h2 className="text-xl font-bold">ПОСТАВЩИК</h2>
              <div className="space-y-2 md:mt-7">
                <a className="hover:text-blue-600 transition-colors">
                  8-800-550-01-09
                </a>
                <a className="hover:text-blue-600 transition-colors">
                  postavi/h@mail.ru
                </a>
              </div>
              <p>postav.irk@mail.ru</p>
              <div className="text-[#167FFE] text-2xl flex items-center gap-3">
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-vk"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <p className="text-sm text-gray-500">© 2023 все права защищены</p>
            </article>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Информация</h2>
              <ul className="space-y-4 md:mt-7 text-[#C7C7C7]">
                <li>
                  <a className="hover:text-blue-600 transition-colors">
                    Оплата
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 transition-colors">
                    Политика обработки персональных данных
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 transition-colors">
                    Согласие на обработку персональных данных
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Центральный офис и склад</h2>
              <ul className="space-y-3 md:mt-7 text-[#C7C7C7]">
                <li className="flex items-start space-x-2">
                  <i className="text-[#287FE8] text-lg mt-1 fa-solid fa-location-dot" />
                  <span>г. Иркутск ул. Ракитная стр 4 корп 11</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="text-[#287FE8] text-lg fa-solid fa-phone" />
                  <span>8-800-550-01-09</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="text-[#287FE8] text-lg mt-1 fa-solid fa-clock" />
                  <span>
                    Режим работы: Пн-Пт с 9:00 до 19:00, Сб с 9:00 до 14:00
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa-solid fa-home text-[#287FE8] text-lg"></i>
                  <span>Региональные склады</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Мобильная версия - аккордеон */}
          <div className="md:hidden mt-6 space-y-4">
            <details className="border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-bold">
                Контакты
                <svg
                  className="w-5 h-5 transform transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-3 space-y-2 pl-2">
                <div className="flex items-center space-x-2">
                  <i className="text-gray-600 fa-solid fa-phone" />
                  <a
                    href="tel:88005500109"
                    className="hover:text-blue-600 transition-colors"
                  >
                    8-800-550-01-09
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="text-gray-600 fa-solid fa-envelope" />
                  <a
                    href="mailto:postavi/h@mail.ru"
                    className="hover:text-blue-600 transition-colors"
                  >
                    postavi/h@mail.ru
                  </a>
                </div>
              </div>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-bold">
                Информация
                <svg
                  className="w-5 h-5 transform transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="mt-3 space-y-2 pl-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors block py-1"
                  >
                    Оплата
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors block py-1"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors block py-1"
                  >
                    Политика обработки персональных данных
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors block py-1"
                  >
                    Согласие на обработку персональных данных
                  </a>
                </li>
              </ul>
            </details>

            <details className="border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-bold">
                Офис и склад
                <svg
                  className="w-5 h-5 transform transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="mt-3 space-y-3 pl-2">
                <li className="flex items-start space-x-2">
                  <i className="text-gray-600 mt-1 fa-solid fa-location-dot" />
                  <span>г. Иркутск ул. Ракитная стр 4 корп 11</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="text-gray-600 fa-solid fa-phone" />
                  <span>8-800-550-01-09</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="text-gray-600 mt-1 fa-solid fa-clock" />
                  <span>
                    Режим работы: Пн-Пт с 9:00 до 19:00, Сб с 9:00 до 14:00
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-blue-600"
                    disabled
                  />
                  <span>Региональные склады</span>
                </li>
              </ul>
            </details>
          </div>
        </main>
      </footer>
      {/* // Narasen Layout !!! */}
      {/* // Narasen Layout !!! */}
      {/* // Narasen Layout !!! */}
      {/* // Narasen Layout !!! */}
    </>
  );
};

export default Layout;
