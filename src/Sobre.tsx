import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function Sobre() {
  const Logo = "./icons/3135715.png"; /* Pode mudar o logo da empresa */

  return (
    <div className="text-center">
      {/* Implementação do NavBar no site principal */}
      {NavigationBar(Logo)}
      {/* Corpo do Site com o consultar CPF e Logo Grande */}
      <div className="container text-center">
        <div className="row p-5 align-items-start">  
        </div>
      </div>
      {/* Footer com as informações da empresa */}
      <Footer />
    </div>
  );
}

export default Sobre;
