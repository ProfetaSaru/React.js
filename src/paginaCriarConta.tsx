import NavigationBar from "./components/BarraNavegação.tsx";
import CreateAccount from "./components/CriadorConta.tsx";
import Footer from "./components/Footer.tsx";

function PaginaCriarConta() {
  const logo = "./icons/3135715.png";

  return  (
    <>
    <NavigationBar logoDaEmpresa={logo} logado={false} />
    {CreateAccount()}
    {Footer()}
    </>
  );
}

export default PaginaCriarConta;
