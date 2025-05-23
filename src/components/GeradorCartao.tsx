import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GenerateCard(
  DisplayBody: boolean, // Se for the conteudo escrito isso aki tem que se TRUE
  //parametros ignoraveis apartir daqui
  Image?: string, // Para mostrar uma imagem assima do conteudo
  Title?: string, // Título Bolded
  Text?: string, // Descrição abaixo do título
  Placeholder?: string, // Texto na caixa de CPF
  // Submit?: string, // Para aonde o botão redirecionará
  Button?: string, // Texto do Botão
  InitialData?: string
) /* Retorna O html responsivo */ {
  const [formData, setFormData] = useState({
    CPF: InitialData || "", // Initialize with provided value or empty string
  });
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/criar-conta", { state: formData });
  };

  return (
    <div
      className="card align-self-center fade-in-up"
      style={{ width: "19rem" }}
    >
      <img src={Image}></img>
      {DisplayBody === true && (
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Text}</p>
          <form
            className="d-flex ms-auto"
            onSubmit={handleSubmit}
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder={Placeholder}
              value={formData.CPF}
              onChange={(e) =>
                setFormData({ ...formData, CPF: e.target.value })
              }
            />
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
