// components/BarraNavegação.tsx
import GenerateButton from "./GeradorBotão";

interface NavigationBarProps {
  logoDaEmpresa: string;
  logado: boolean;
}

function NavigationBar({ logoDaEmpresa, logado }: NavigationBarProps) {
  const handleScroll = () => {
    const element = document.getElementById('sobre-nos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollParcerias = () => {
    const element = document.getElementById('parcerias');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: 'rgb(230, 242, 255)' }}
    >
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logoDaEmpresa}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          Desenrola.Aí
        </a>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links centrais */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-2">
            {GenerateButton("Início", true, "/")}
            <li className="nav-item fade-in-up">
              <button className="nav-link bg-transparent border-0" onClick={handleScroll}>
                Sobre nós
              </button>
            </li>
            <li className="nav-item fade-in-up">
              <button className="nav-link bg-transparent border-0" onClick={handleScrollParcerias}>
                Parcerias
              </button>
            </li>
          </ul>
        </div>

        {/* Botão "Sua Conta" em azul escuro */}
        {logado ? (
          <button
            className="btn btn-outline-primary ms-auto"
            style={{
              color: "#0a2a66",
              borderColor: "#0a2a66",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0a2a66";
              (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#0a2a66";
            }}
          >
            Sua Conta
          </button>
        ) : (
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="XXX.XXX.XXX-XX"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary text-dark-blue" type="submit">
              Consultar CPF
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
