import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./pages/layout/layout";
import Postavshic from "./pages/norovskiy/postavshic";
import Katalog from "./pages/norovskiy/katalog";
import Tovar from "./pages/muslim/tovar";
import Politika from "./pages/muslim/politika";
import Dostavka from "./pages/fahim/dostavka";
import Stoimost from "./pages/fahim/stoimost";
import Kontacti from "./pages/fahim/kontacti";
import Oplata from "./pages/ahliddin/oplata";
import Korzina from "./pages/ahliddin/korzina";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Postavshic />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/tovar" element={<Tovar />} />
          <Route path="/politika" element={<Politika />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/stoimost" element={<Stoimost />} />
          <Route path="/kontacti" element={<Kontacti />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/korzina" element={<Korzina />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
