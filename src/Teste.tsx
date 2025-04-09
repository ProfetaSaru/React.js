import Footer from "./components/Footer";
import GenerateCard from "./components/GeradorCard";
import LogarContaCard from "./components/LogarConta";
import NavigationBar from "./components/NavigationBar";

function teste() {
  const Logo = "./icons/3135715.png"; /* Pode mudar o logo da empresa */

  return (
    <>
      <div className="container text-center">
        {NavigationBar(Logo, true)}
        <div className="row p-5 align-items-center">
          <div className="col">{LogarContaCard()}</div>
          <div className="col">{GenerateCard(false, Logo)}</div>
        </div>
      </div>
      {Footer()}
    </>
  );
}

export default teste;
