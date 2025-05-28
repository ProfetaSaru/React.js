import React from "react";

function getCompanyColor(empresa: string): string {
  const name = empresa.toLowerCase();
  if (name.includes("netflix")) return "#E00409";
  if (name.includes("nu")) return "#8800FA";
  if (name.includes("disney")) return "#005994";
  if (name.includes("prime")) return "#2271f0";
  if (name.includes("spotify")) return "#09D255";
  return "#ffffff";
}

function DebtCard(
  logo: string,
  valor: number,
  empresa: string = "Empresa",
  dataVencimento?: string,
  status?: string
) {
  const HNW = 52;
  const bgColor = getCompanyColor(empresa);

  return (
    <div
      className="card"
      style={{
        backgroundColor: bgColor,
        border: "none",
      }}
    >
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {/* Logo com destaque */}
          <li
            className="list-group-item d-flex align-items-center gap-3"
            style={{ backgroundColor: bgColor, border: "none" }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "0.25rem",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt={`Logo ${empresa}`}
                style={{ height: HNW, width: "auto" }}
              />
            </div>
          </li>

          {/* Nome da empresa acima do valor */}
          <li
            className="list-group-item"
            style={{ backgroundColor: bgColor, border: "none" }}
          >
            <p className="debt-value mb-2" style={{ marginBottom: "0.5rem" }}>
              <span
                style={{
                  display: "block",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {empresa}
              </span>
              <span
                style={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                }}
              >
                R$ {valor.toFixed(2)}
              </span>
            </p>

            {dataVencimento && (
              <p className="due-date mb-2" style={{ color: "#000" }}>
                Vencimento: {dataVencimento}
              </p>
            )}
            {status && (
              <p
                className={`status mb-0 ${status.toLowerCase()}`}
                style={{ color: "#000" }}
              >
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
