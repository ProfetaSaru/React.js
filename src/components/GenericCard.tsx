function GenerateCard(
  DisplayBody: boolean, // Se for the conteudo escrito isso aki tem que se TRUE
  //parametros ignoraveis apartir daqui
  Image?: string, // Para mostrar uma imagem assima do conteudo
  Title?: string, // Título Bolded
  Text?: string, // Descrição abaixo do título
  Placeholder?: string, // Texto na caixa de CPF
  Button?: string // Texto do Botão
) /* Retorna O html responsivo */ {
  return (
    <div className="card align-self-center" style={{ width: "19rem" }}>
      <img src={Image}></img>
      {DisplayBody === true && (
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Text}</p>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder={Placeholder}
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              {Button}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default GenerateCard;
