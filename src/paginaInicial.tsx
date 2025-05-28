import React from "react";
import NavigationBar from "./components/BarraNavegação.tsx";
import Footer from "./components/Footer.tsx";
import SobreNos from "./components/SobreNos.tsx";
import Parcerias from "./components/Parcerias.tsx";

function PaginaInicial() {
  const logo = "./icons/LogoDesenrola.ai.png";

  return (
    <div className="text-center">
      <NavigationBar logoDaEmpresa={logo} logado={false} />

      <section
        style={{
          backgroundColor: "#ffffff",
          paddingBottom: "150px",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "50px",
              padding: "20px 0 0 0",
              flexWrap: "wrap",
            }}
          >
            {/* Card Consulta CPF */}
            <div
              style={{
                flex: "1 1 400px",
                maxWidth: "600px",
                textAlign: "center",
                padding: "40px",
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "700px",
                width: "100%",
                margin: "auto",
                border: "none",
                boxShadow: "none",
              }}
            >
              <img
                src={logo}
                alt="Logo Desenrola.ai"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: 0 }}>
        <SobreNos />
      </div>

      <Parcerias />
      <Footer />
    </div>
  );
}

export default PaginaInicial;
