import Footer from "./Footer";
import GeradorDividas from "./GeradorDividas";

function dividaCorpo(Nome: string, Dividas: boolean) {
  const Logo = "./icons/3135715.png";

  return (
    <>
      <div className="container row">
        <div className="row items-center">
          <div className="col">
            {`Olá ${Nome}, ${
              Dividas === true ? "Você tem dividas" : "Você não tem dividas"
            }`}
          </div>
        </div>
      </div>
    </>
  );
}

export default dividaCorpo;
