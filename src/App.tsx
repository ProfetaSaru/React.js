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
              {GenerateCard(true, '', 'Consultar CPF?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt exercitationem dolores odio illo veritatis ut vitae necessitatibus, asperiores soluta.', 'XXX.XXX.XXX-XX', 'Consultar CPF')}
          </div>
          <div className="col"></div>
          <div className="col">
            {GenerateCard(false, Logo)}
          </div>
        </div>
      </div>
      {/* Footer com as informações da empresa */}
      <Footer />
    </div>
  );
}

export default App;
