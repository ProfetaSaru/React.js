// Componente CardDivida.tsx
function DebtCard(
  // Exemplos de dados de divida
  logo: string,
  valor: number,
  empresa: string = "Empresa",
  dataVencimento?: string,
  status?: string
) {
  const HNW = 52;

  return (
    <div className="card" style={{ width: "19rem" }}>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <img
              src={logo}
              alt={`Logo ${empresa}`}
              style={{ height: HNW, width: "auto" }}
            />
            <h3>{empresa}</h3>
          </li>
          <li className="list-group-item">
            <p className="debt-value">R$ {valor.toFixed(2)}</p>
            {dataVencimento && (
              <p className="due-date">Vencimento: {dataVencimento}</p>
            )}
            {status && (
              <p className={`status ${status.toLowerCase()}`}>
                Status: {status}
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DebtCard;
