function DebtCard(logo: string, divida: number) {
  return (
    <div className="card text-bg-primary mb-3" style={{ width: "19rem" }}>
      <div className="card-header">
        <div className="text-start">
          <img src={logo} width={52} height={52} alt="..." />
        </div>
        <div className="text-end">{`R$ ${divida}`}</div>
      </div>
      <div className="card-body">
        <button>negociar</button>
        <button>detalhes</button>
      </div>
    </div>
  );
}

export default DebtCard;
