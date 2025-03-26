import GenerateCard from "./components/GenericCard";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  const Logo = "./icons/3135715.png"; /* Pode mudar o logo da empresa */

  return (
    <div className="text-center">
      {/* Implementação do NavBar no site principal */}
      {NavigationBar(Logo)}
      {/* Corpo do Site com o consultar CPF e Logo Grande */}
      <div className="container text-center">
        <div className="row p-5 align-items-start">
          <div className="col">
            <>
              {GenerateCard(
                true, // Mostrar o corpo
                "", // Vazio para não mostrar uma imagem
                "Consultar CPF?", // Titulo no topo do cartão
                // Descrição do cartão
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit minima inventore sit omnis ratione aliquam delectus hic officiis distinctio!",
                "XXX.XXX.XXX-XX", // Mostra aonde escrever o CPF
                "Consultar CPF" // Escrita no botão
              )}
            </>
          </div>
          <div className="col">
            <>{GenerateCard(false, Logo)}</>
          </div>
        </div>
      </div>
      {/* Footer com as informações da empresa */}
      <Footer />
    </div>
  );
}

export default App;
