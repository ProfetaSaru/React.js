import React from "react";
import Footer from "./components/Footer";
import LogarContaCard from "./components/CartaoLogarConta";
import NavigationBar from "./components/BarraNavegação";

function PaginaLogin() {
  const logo = "./icons/LogoDesenrola.ai.png";

  return (
    <div className="text-center">
      {/* Navbar */}
      <NavigationBar logoDaEmpresa={logo} logado={true} />

      {/* Seção externa com fundo branco */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingBottom: "150px",
        }}
      >
        {/* Container sem padding lateral */}
        <div className="container" style={{ padding: 0, margin: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",  // espaça card e imagem
              alignItems: "flex-start",
              flexWrap: "nowrap",               // impede quebra
              gap: "50px",
              padding: "20px 0 0 0",
            }}
          >
            {/* Card de login com deslocamento à direita */}
            <div
              style={{
                flex: "0 0 45%",
                minWidth: "350px",
                padding: "40px",
                marginLeft: "2rem",    // desloca o card para a direita
                border: "2px solid #ccc",
                borderRadius: "15px",
                boxShadow: "0 4px 15px #007BFF",
                backgroundColor: "#e6f2ff",
              }}
            >
              {LogarContaCard()}
            </div>

            {/* Imagem ao lado do card */}
            <div
              style={{
                flex: "0 0 45%",
                minWidth: "350px",
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
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PaginaLogin;
