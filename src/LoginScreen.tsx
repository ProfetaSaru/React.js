import Footer from "./components/Footer";
import GenerateCard from "./components/GeradorCard";
import LogarContaCard from "./components/LogarConta";
import NavigationBar from "./components/NavigationBar";

function PaginaLogin() {
  const Logo = "./icons/3135715.png"; /* Pode mudar o logo da empresa */

  return (
    <div className="text-center">
      <div className="container">
        {NavigationBar(Logo, true)}
        <div className="row p-5 align-items-center">
          <div className="col">{LogarContaCard()}</div>
        </div>
      </div>
      {Footer()}
    </div>
  );
}

export default PaginaLogin;