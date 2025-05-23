import GenerateCard from "./components/GeradorCartao.tsx";
import NavigationBar from "./components/BarraNavegação.tsx";
import Footer from "./components/Footer.tsx";
import SobreNos from "./components/SobreNos.tsx";
import Parcerias from "./components/Parcerias.tsx";

function PaginaInicial() {
  const logo = "./icons/LogoDesenrola.ai.jpg"; // Pode mudar o logo da empresa

  return (
    <div className="text-center">
      {/* Implementação do NavBar no site principal */}
      <NavigationBar logoDaEmpresa={logo} logado={false} />

      {/* Corpo do Site com o consultar CPF e Logo Grande */}
      <div className="container text-center">
        <div className="row p-5 align-items-start">
          <div className="col">
            {GenerateCard(
              true,
              "",
              "Consultar CPF?",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt exercitationem dolores odio illo veritatis ut vitae necessitatibus, asperiores soluta.",
              "XXX.XXX.XXX-XX",
              "Consultar CPF"
            )}
          </div>
          <div className="col"></div>
          <div className="col">{GenerateCard(false, logo)}</div>
        </div>
      </div>
      <SobreNos />
      {/* Footer com as informações da empresa */}
      <Parcerias />
      <Footer />
    </div>
  );
}

export default PaginaInicial;
