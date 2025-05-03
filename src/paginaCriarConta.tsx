import NavigationBar from "./components/BarraNavegação.tsx";
import CreateAccount from "./components/CriadorConta.tsx";
import Footer from "./components/Footer.tsx";

function PaginaCriarConta() {
  const Logo = "./icons/3135715.png";

  return  (
    <>
    {NavigationBar(Logo, false)}
    {CreateAccount()}
    {Footer()}
    </>
  );
}

export default PaginaCriarConta;
