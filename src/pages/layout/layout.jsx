import React from "react";
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between p-5 shadow-2xl">
          <article className="flex items-center gap-7">
            <Link to={"/"}>
              <img src="logo.png" alt="logo" />
            </Link>
            <Link to={"/katalog"}>
              <p className="text-[#707070]">От завода без посредников</p>
            </Link>
          </article>
          <ul className="text-[#0A61DE] font-semibold flex items-center gap-12">
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
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>
                <p className="font-bold text-xl text-black">8-800-550-01-09</p>
              </div>
            </Link>
            <Link to={"/kontacti"}>
              <i className="fa-brands fa-opencart"></i>
            </Link>
          </ul>
        </nav>

        <nav className="flex items-center justify-between md:gap-16 gap-5 bg-[#EDEDED] px-5 py-3 shadow-2xl text-lg">
          <Link to={"/oplata"}>
            <button className="py-2 bg-[#167FFE] text-white flex items-center gap-3 px-7 rounded-sm">
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
            <div className="flex items-center gap-3">
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
      <footer></footer>
    </>
  );
};

export default Layout;
