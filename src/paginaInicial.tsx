import React from "react";
import NavigationBar from "./components/BarraNavegação.tsx";
import Footer from "./components/Footer.tsx";
import SobreNos from "./components/SobreNos.tsx";
import Parcerias from "./components/Parcerias.tsx";

function PaginaInicial() {
  const logo = "./icons/LogoDesenrola.ai.jpg";

  return (
    <div className="text-center">
      <NavigationBar logoDaEmpresa={logo} logado={false} />

      {/* Seção com fundo e padding estendido */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingBottom: "150px", // Espaço extra inferior
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                nesciunt exercitationem dolores odio illo veritatis ut vitae
                necessitatibus, asperiores soluta.
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

            {/* Logo aumentado, sem borda nem sombra */}
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

      {/* Seções adicionais */}
      <div style={{ marginTop: 0 }}>
        <SobreNos />
      </div>

      <Parcerias />
      <Footer />
    </div>
  );
}

export default PaginaInicial;
