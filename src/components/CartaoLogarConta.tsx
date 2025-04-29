import { useState } from "react";

function LogarConta() {
  const Logo = "./icons/3135715.png";
  const HNW = 52;
  
  // Use state to track which component to display
  const [isPasswordView, setIsPasswordView] = useState(false);
  // State for CPF value
  const [cpfValue, setCpfValue] = useState("");
  // Separate state for password
  const [passwordValue, setPasswordValue] = useState("");
  
  // CPF formatter function
  const formatCPF = (value: string) => {
    // Remove all non-digit characters
    const cpfDigits = value.replace(/\D/g, '');
    
    // Limit to 11 digits (CPF length)
    const limitedCPF = cpfDigits.slice(0, 11);
    
    // Format the CPF with periods and hyphen
    let formattedCPF = '';
    if (limitedCPF.length > 0) {
      formattedCPF = limitedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      
      // Handle partial input formats
      if (limitedCPF.length <= 3) {
        formattedCPF = limitedCPF;
      } else if (limitedCPF.length <= 6) {
        formattedCPF = limitedCPF.replace(/(\d{3})(\d{1,3})/, '$1.$2');
      } else if (limitedCPF.length <= 9) {
        formattedCPF = limitedCPF.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
      }
    }
    
    return formattedCPF;
  };
  
  // Handle CPF input change
  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatCPF(value);
    setCpfValue(formattedValue);
  };
  
  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };
  
  function handleCPFSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault(); // Prevent form submission
    
    // Validate CPF before proceeding (must have 11 digits)
    const cpfDigits = cpfValue.replace(/\D/g, '');
    if (cpfDigits.length === 11) {
      setIsPasswordView(true);
      // Reset password field when switching to password view
      setPasswordValue("");
    } else {
      alert("Por favor, insira um CPF válido com 11 dígitos.");
    }
  }
  
  function handlePasswordSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault(); // Prevent form submission
    // Handle login logic here
    console.log("Login attempt with CPF:", cpfValue, "and password:", passwordValue);
  }
  
  function goBackToCPF() {
    setIsPasswordView(false);
  }

  // CPF input component
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
            autoComplete="off" // Prevent autocomplete
          />
          <button 
            className="btn btn-outline-success" 
            type="submit"
            disabled={cpfValue.replace(/\D/g, '').length !== 11}
          >
            continuar
          </button>
        </form>
        <p className="card-text">Não tem conta conosco?</p>
        <button className="btn btn-outline-success"><a href="/criar-conta">Cadastre-se!</a></button>
      </div>
    </div>
  );

  // Display formatted CPF in the password view
  const displayCPF = cpfValue || "CPF não fornecido";

  // Password input component
  const PasswordGetter = (
    <div className="card align-self-center" style={{ width: "19rem" }}>
      <div className="card-title text-start p-2">
        <button className="btn" onClick={goBackToCPF} type="button">voltar</button>
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
            autoComplete="new-password" // Prevent password autofill
          />
          <button 
            className="btn btn-outline-success" 
            type="submit"
          >
            entrar
          </button>
        </form>
      </div>
    </div>
  );
  
  // Return the appropriate component based on state
  return isPasswordView ? PasswordGetter : CPFGetter;
}

export default LogarConta;