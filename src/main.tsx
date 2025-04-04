import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from './Sobre.tsx';
import CreateAccountPage from './CriarConta.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/sobre' Component={Sobre}/>
      <Route path='/criar-conta' Component={CreateAccountPage}/>
    </Routes>
  </BrowserRouter>
)