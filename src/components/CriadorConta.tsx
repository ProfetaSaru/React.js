import React from "react";
import InputGenerator from "./InputComponent";

function CreateAccount() {
  return (
    <>
      {/* Estilos inline para o card e labels */}
      <style>{`
        .card-create-account {
          background-color: #e6f2ff !important;
        
          
          
        }
        .card-create-account label {
          font-weight: bold;
        }
      `}</style>

      <div className="row justify-content-center">
        <div className="card card-create-account" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Criar Conta</h5>

            {/* Input com label em negrito */}
            {InputGenerator("text", "form-control", "CPF", "XXX.XXX.XXX-XX")}

            {/* Email com label em negrito */}
            {InputGenerator(
              "text",
              "form-control",
              "Email",
              "Nome@Dominio.com"
            )}

            {/* Botão em tom de azul escuro */}
            <button className="btn btn-primary w-100 mt-3">
              Criar Conta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
