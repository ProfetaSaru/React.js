import { useState } from "react";

function LogarConta() {
  const Logo = "./icons/3135715.png";
  const HNW = 52;

  // useState pra definir qual componente mostrar
  const [isPasswordView, setIsPasswordView] = useState(false);
  // Salvar Valor CPF
  const [cpfValue, setCpfValue] = useState("");
  // Salvar Valor Senha
  const [passwordValue, setPasswordValue] = useState("");

  // CPF Formatador
  const formatCPF = (value: string) => {
    // Remove todos os characteres não numerais
    const cpfDigits = value.replace(/\D/g, "");

    // Limita characteres a 11
    const limitedCPF = cpfDigits.slice(0, 11);

    // Formatador de CPF
    let formattedCPF = "";
    if (limitedCPF.length > 0) {
      formattedCPF = limitedCPF.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );

      // Lidar com formatos de entrada parciais
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

  // Lidar com mudança de valor CPF
  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatCPF(value);
    setCpfValue(formattedValue);
  };

  // Lidar com mudança de valor Password
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  function handleCPFSubmit(e: { preventDefault: () => void }) {
    e.preventDefault(); // Impede recarregar a pagina normalmente

    // Valida CPF antes de proceder (tem que ter todos os 11 digitos)
    const cpfDigits = cpfValue.replace(/\D/g, "");
    if (cpfDigits.length === 11) {
      setIsPasswordView(true);
      // Reseta o valor do Password quando mudar para o componente de senha
      setPasswordValue("");
    } else {
      alert("Por favor, insira um CPF válido com 11 dígitos.");
    }
  }

  function handlePasswordSubmit(e: { preventDefault: () => void }) {
    e.preventDefault(); // Impéde envio de formulário
    // Adicionar logica da api aqui
    console.log(
      "Login attempt with CPF:",
      cpfValue,
      "and password:",
      passwordValue
    );
  }

  function goBackToCPF() {
    setIsPasswordView(false);
  }

  // Componente de input de CPF
  const CPFGetter = (
    <div className="card align-self-center" style={{ width: "19rem" }}>
      <div className="card-title text-start p-2">
        <img src={Logo} height={HNW} width={HNW} alt="Logo" />
      </div>
      <div className="card-body">
        <div className="text-start">CPF</div>
        <form onSubmit={handleCPFSubmit} role="search">
          <input
            className="form-control me-2"
            placeholder="XXX.XXX.XXX-XX"
            type="text"
            value={cpfValue}
            onChange={handleCPFChange}
            maxLength={14} // Max length of formatted CPF (11 digits + 3 separators)
            autoComplete="off" // Impéde preenchimento automático
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            disabled={cpfValue.replace(/\D/g, "").length !== 11}
          >
            continuar
          </button>
        </form>
        <p className="card-text">Não tem conta conosco?</p>
        <button className="btn btn-outline-success">
          <a href="/criar-conta">Cadastre-se!</a>
        </button>
      </div>
    </div>
  );

  // Mostra CPF formatado no componente de Senha
  const displayCPF = cpfValue || "CPF não fornecido";

  // Componente de input de Password
  const PasswordGetter = (
    <div className="card align-self-center" style={{ width: "19rem" }}>
      <div className="card-title text-start p-2">
        <button className="btn" onClick={goBackToCPF} type="button">
          voltar
        </button>
        <div>{displayCPF}</div>
      </div>
      <div className="card-body">
        <div className="text-start">Senha</div>
        <form onSubmit={handlePasswordSubmit} role="search">
          <input
            className="form-control me-2"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            autoComplete="new-password" // Impéde preenchimento automático de senha
          />
          <button className="btn btn-outline-success" type="submit">
            entrar
          </button>
        </form>
      </div>
    </div>
  );

  // Retorna o componente apropriado de acordo com o state
  return isPasswordView ? PasswordGetter : CPFGetter;
}

export default LogarConta;
