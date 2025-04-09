import Footer from "./Footer";
import GeradorDividas from "./GeradorDividas";

function dividaCorpo(Nome: string, Dividas: boolean) {
  const Logo = "./icons/3135715.png";
  let Valor;

  return (
    <>
    <div className="container row">
      <div className="row items-center">
        <div className="col">
          {`Olá ${Nome}, ${
            Dividas === true ? "Você tem dividas" : "Você não tem dividas"
          }`}
          {GeradorDividas(Logo, 3, 1000)}`
        </div>
      </div>
    </div>
    {Footer()}
    </>
  );
}

export default dividaCorpo;
