import NavigationBar from "./components/NavigationBar";

function DetalhesDivida() {
  const CPF = "XXX.XXX.XXX-XX";
  const Logo = "./icons/3135715.png";
  const HNW = 52;

  return (
    <div className="container text-center">
      {NavigationBar(Logo, false)}
      <div className="text-start">Detalhes do Contrato</div>
      <div className="card">
        <div className="card-body row">
          <img src={Logo} height={HNW} width={HNW} alt="Logo" />
          <div> CPF: {CPF}</div>
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

export default DetalhesDivida;
