function NavigationBar(LogoDaEmpresa: string) {
  // Preferiria Diminuir mas não consegui no mento
  // LogoDaEmpresa para adcionar como parametro e ter como mudar no App.tsx
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Display do logo da impresa */}
        <a className="navbar-brand" href="#">
          <img
            src={LogoDaEmpresa}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          ></img>
          RandomGuy
        </a>
        {/* Supostamente é para usar como colapso no celular mas tive problema em implementação */}
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
        {/* Botões Início, Sobre Nós, e Parceiros, ainda sem funcionalidade */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre nós
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Parceiros
              </a>
            </li>
          </ul>
          {/* Consultar CPF no NavBar */}
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="XXX.XXX.XXX-XX"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Consultar CPF
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
