// GeradorDividas.tsx
import React from "react";
import DebtCard from "./CartãoDivida";

interface Divida {
  id?: number;
  empresa: string;
  logo: string;
  valor: number;
  data_vencimento?: string;
  status?: string;
}

function getBgColor(empresa: string) {
  const name = empresa.toLowerCase();

  if (name.includes("netflix")) return "#E50914";
  if (name.includes("nu")) return "#9D00FF";            // nubank ou nu
  if (name.includes("disney")) return "#006e99";
  if (name.includes("prime")) return "#2271f0";         // agora qualquer “prime…” vai bater
  if (name.includes("spotify")) return "#1ED760";

  return "#e6f2ff"; // fallback
}

function GeradorDividas(dividas: Divida[]) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    padding: "1rem",
  };

  const baseWrapperStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1rem",
    width: "300px",
    transition: "transform 0.2s",
  };

  return (
    <div style={containerStyle}>
      {dividas.map((divida, idx) => {
        const bgColor = getBgColor(divida.empresa);
        return (
          <div
            key={idx}
            style={{
              ...baseWrapperStyle,
              backgroundColor: bgColor,
              boxShadow: `0 2px 8px ${bgColor}80`,
            }}
          >
            {DebtCard(
              divida.logo,
              divida.valor,
              divida.empresa,
              divida.data_vencimento,
              divida.status
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GeradorDividas;
