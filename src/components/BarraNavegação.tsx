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
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logoDaEmpresa}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Desenrola.Aí
        </a>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {GenerateButton("Início", true, "/")}
            <li className="nav-item fade-in-up">
              <button className="nav-link" onClick={handleScroll}>
                Sobre nós
              </button>
            </li>
            <li className="nav-item fade-in-up">
  <button className="nav-link" onClick={() => {
    const element = document.getElementById('parcerias');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}>
    Parcerias
  </button>
</li>
          </ul>

          {logado ? (
            <button className="btn btn-outline-success d-flex ms-auto">
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
              <button className="btn btn-outline-success" type="submit">
                Consultar CPF
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
