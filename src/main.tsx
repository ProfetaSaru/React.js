import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/teste.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaCriarConta from "./paginaCriarConta.tsx";
import PaginaDeDivida from "./PaginaDeDivida.tsx";
import PaginaDividas from "./paginaDividas.tsx";
import paginaInicial from "./paginaInicial.tsx";
import PaginaLogin from "./paginaLogin.tsx";
import PaginaTeste00 from "./paginaTestes00.tsx";
import PaginaTeste01 from "./paginaTestes01.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={paginaInicial} />
      <Route path="/teste01" Component={PaginaTeste00} />
      <Route path="/teste02" Component={PaginaTeste01} />
      <Route path="/dividas" Component={PaginaDividas} />
      <Route path="/login" Component={PaginaLogin} />
      <Route path="/criar-conta" Component={PaginaCriarConta} />
      <Route path="/minhas-dividas" Component={PaginaDividas} />
      <Route path="/detalhes-divida" Component={PaginaDeDivida}/>
    </Routes>
  </BrowserRouter>
);
