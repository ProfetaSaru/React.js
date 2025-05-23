import NavigationBar from "./components/BarraNavegação";

function PaginaDeDivida() {
  const CPF = "XXX.XXX.XXX-XX";
  const Logo = "./icons/3135715.png";

  return (
    <div className="container text-center">
      <NavigationBar logoDaEmpresa={Logo} logado={false} />
      <div className="text-start">Detalhes do Contrato</div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="align-self-center"
              src={Logo}
              height={52}
              width="auto"
              alt="Logo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> CPF: {CPF}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col align-items-center">
        <p>selecione a oferta desejada</p>
        <div className="d-flex justify-content-center">
          <div className="card align-self-center" style={{ width: "50rem" }}>
            <div className="card-body">*opções</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDeDivida;
