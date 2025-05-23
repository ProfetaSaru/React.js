import InputGenerator from "./InputComponent";

function CreateAccount() {

  return (
    <>
      <div className="row justify-content-center">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Criar Conta</h5>
            {InputGenerator("text", "form-control", "CPF", "XXX.XXX.XXX-XX")}
            {InputGenerator(
              "text",
              "form-control",
              "EMail",
              "Nome@Dominio.com"
            )}
            <button className="btn btn-secondary">Criar Conta</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
