import DebtCard from "./CardDivida";

// Interface para definir a estrutura dos dados de dívida
interface Divida {
  id?: number;
  empresa: string;
  logo: string;
  valor: number;
  data_vencimento?: string;
  status?: string;
}

/**
 * Gera cartões de dívida a partir de um array de dados de dívidas
 * @param dividas - Array de objetos contendo dados das dívidas
 * @returns Array de componentes DebtCard
 */
function GeradorDividas(dividas: Divida[]) {
  return dividas.map((divida, index) => (
    <div key={index}>
      {DebtCard(divida.logo, divida.valor, divida.empresa, divida.data_vencimento, divida.status)}
    </div>
  ));
}

export default GeradorDividas;