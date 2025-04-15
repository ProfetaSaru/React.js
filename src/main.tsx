import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./Teste.tsx";
import CreateAccountPage from "./CriarConta.tsx";
import PaginaDividas from "./SeletorDeDivida.tsx";
import PaginaLogin from "./LoginScreen.tsx";
import DetalhesDivida from "./PaginaDeDivida.tsx";
import MinhasDividas from "./MinhasDividas.tsx";

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
