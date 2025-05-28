import React from "react";
import NavigationBar from "./components/BarraNavegação";
import Footer from "./components/Footer";
import SobreNos from "./components/SobreNos";
import Parcerias from "./components/Parcerias";

function PaginaInicial() {
  const logo = "./icons/LogoDesenrola.ai.png";

  return (
    <div className="text-center">
      <NavigationBar logoDaEmpresa={logo} logado={false} />

      <section style={{ backgroundColor: "#ffffff", paddingBottom: "150px" }}>
        <div className="container" style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "50px",
              padding: "20px 0 0 0",
              flexWrap: "nowrap",
            }}
          >
            {/* Card Consulta CPF */}
            <div
              style={{
                flex: "0 0 45%",
                minWidth: "300px",
                textAlign: "center",
                padding: "40px",
                marginLeft: "2rem",
                border: "2px solid #ccc",
                borderRadius: "15px",
                boxShadow: "0 4px 15px #007BFF",
                backgroundColor: "#e6f2ff",
              }}
            >
              <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                Consultar CPF?
              </h3>
              <p style={{ fontSize: "1.4rem", marginBottom: "30px" }}>
                Insira o CPF para consultar, em instantes, seu status cadastral, score de crédito e eventuais pendências tudo de forma rápida, segura e 100 % confidencial.
              </p>
              <input
                type="text"
                placeholder="XXX.XXX.XXX-XX"
                style={{
                  padding: "10px 20px",
                  fontSize: "1.2rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  width: "80%",
                  marginBottom: "20px",
                }}
              />
              <br />
              <button
                style={{
                  padding: "10px 30px",
                  fontSize: "1.2rem",
                  borderRadius: "8px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Consultar CPF
              </button>
            </div>

            {/* Imagem ao lado do card */}
            <div
              style={{
                flex: "0 0 45%",
                minWidth: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <img
                src={logo}
                alt="Logo Desenrola.ai"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <SobreNos />
      <Parcerias />
      <Footer />
    </div>
  );
}

export default PaginaInicial;
