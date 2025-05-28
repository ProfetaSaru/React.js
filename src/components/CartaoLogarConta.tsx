import { useState } from "react";

function LogarConta() {
  const Logo = "./icons/3135715.png";
  const HNW = 52;

  const [isPasswordView, setIsPasswordView] = useState(false);
  const [cpfValue, setCpfValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const formatCPF = (value: string) => {
    const cpfDigits = value.replace(/\D/g, "");
    const limitedCPF = cpfDigits.slice(0, 11);
    let formattedCPF = "";

    if (limitedCPF.length > 0) {
      formattedCPF = limitedCPF.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
      if (limitedCPF.length <= 3) {
        formattedCPF = limitedCPF;
      } else if (limitedCPF.length <= 6) {
        formattedCPF = limitedCPF.replace(/(\d{3})(\d{1,3})/, "$1.$2");
      } else if (limitedCPF.length <= 9) {
        formattedCPF = limitedCPF.replace(
          /(\d{3})(\d{3})(\d{1,3})/,
          "$1.$2.$3"
        );
      }
    }

    return formattedCPF;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpfValue(formatCPF(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  function handleCPFSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (cpfValue.replace(/\D/g, "").length === 11) {
      setIsPasswordView(true);
      setPasswordValue("");
    } else {
      alert("Por favor, insira um CPF válido com 11 dígitos.");
    }
  }

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Login attempt with CPF:", cpfValue, "and password:", passwordValue);
  }

  function goBackToCPF() {
    setIsPasswordView(false);
  }

  // estilo comum para o card
  const cardStyle = {
    width: "19rem",
    backgroundColor: "#e6f2ff",  // azul-claro unificado
    border: "2px solid #ccc",
    borderRadius: "8px",
  };

  const CPFGetter = (
    <div className="card align-self-center" style={cardStyle}>
      <div className="card-title text-start p-2">
        <img src={Logo} height={HNW} width={HNW} alt="Logo" />
      </div>
      <div className="card-body">
        <div className="text-start">CPF</div>
        <form onSubmit={handleCPFSubmit}>
          <input
            className="form-control mb-3"
            placeholder="XXX.XXX.XXX-XX"
            type="text"
            value={cpfValue}
            onChange={handleCPFChange}
            maxLength={14}
            autoComplete="off"
          />
          <button
            className="btn btn-primary w-100 mb-2"
            type="submit"
            disabled={cpfValue.replace(/\D/g, "").length !== 11}
          >
            Continuar
          </button>
        </form>
        <p className="card-text">Não tem conta conosco?</p>
        <a className="btn btn-outline-primary w-100" href="/criar-conta">
          Cadastre-se!
        </a>
      </div>
    </div>
  );

  const displayCPF = cpfValue || "CPF não fornecido";

  const PasswordGetter = (
    <div className="card align-self-center" style={cardStyle}>
      <div className="card-title text-start p-2 d-flex align-items-center">
        <button className="btn btn-link p-0 me-2" onClick={goBackToCPF} type="button">
          ← Voltar
        </button>
        <span>{displayCPF}</span>
      </div>
      <div className="card-body">
        <div className="text-start">Senha</div>
        <form onSubmit={handlePasswordSubmit}>
          <input
            className="form-control mb-3"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
          <button className="btn btn-primary w-100" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );

  return isPasswordView ? PasswordGetter : CPFGetter;
}

export default LogarConta;
