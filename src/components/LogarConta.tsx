function LogarContaCard() {
  const Logo = "./icons/3135715.png";
  const HNW = 52;

  return (
    <div className="card align-self-center" style={{ width: "19rem" }}>
      <div className="card-title text-start">
        <img src={Logo} height={HNW} width={HNW} alt="Logo" />
      </div>
      <div className="card-body">
        <div className="text-start">CPF</div>
        <form className="" role="search">
          <input
            className="form-control me-2"
            placeholder="XXX.XXX.XXX-XX"
            type="search"
          />
          <button className="btn btn-outline-success" type="submit">
            continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogarContaCard;
