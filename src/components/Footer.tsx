//Gerado por AI, refatorização possivel no futuro
/* depois temos que melhorar essa página, criar um css só dela!!!*/
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>Sobre Nós</h5>
            <p>
              Somos uma empresa inovadora dedicada a criar soluções tecnológicas
              para todos.
            </p>
          </div>
          <div className="col-12">
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <h5>Siga-nos</h5>
            <a href="#" className="text-white me-2">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <br />
            <a href="#" className="text-white me-2">
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <br />
            <a href="#" className="text-white me-2">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>
        </div>
        <hr className="text-white"></hr>
        <p className="text-center mb-0">
          &copy; 2025 Sua Empresa. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
