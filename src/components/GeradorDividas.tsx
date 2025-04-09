import DebtCard from "./CardDivida";

function GeradorDividas(Logo : string, Quantidade : number, Valor : number) {
    const dividas: any[] = []

    for (let index = 0; index < Quantidade; index++) {
      dividas.push(
        <div key={index}>
          {DebtCard(Logo, Valor)}
        </div>
      );
    }

    return dividas;
}

export default GeradorDividas;