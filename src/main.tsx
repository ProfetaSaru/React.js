import { createRoot } from "react-dom/client";
import App from "./paginaInicial.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./paginaTestes01.tsx";
import CreateAccountPage from "./paginaCriarConta.tsx";
import PaginaDividas from "./SeletorDeDivida.tsx";
import PaginaLogin from "./paginaLogin.tsx";
import DetalhesDivida from "./PaginaDeDivida.tsx";
import MinhasDividas from "./paginaDividas.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/teste" Component={Sobre} />
      <Route path="/dividas" Component={PaginaDividas} />
      <Route path="/login" Component={PaginaLogin} />
      <Route path="/criar-conta" Component={CreateAccountPage} />
      <Route path="/minhas-dividas" Component={MinhasDividas} />
      <Route path="/detalhes-divida" Component={DetalhesDivida}/>
    </Routes>
  </BrowserRouter>
);
