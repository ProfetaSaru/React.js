import React, { useEffect, useState } from 'react';
import GeradorDividas from './components/GeradorDividas';
import NavigationBar from './components/BarraNavegação';

interface Divida {
  id: number;
  empresa: string;
  logo: string;
  valor: number;
  data_vencimento: string;
  status: string;
}

function PaginaDividas() {
  const Logo = "./icons/LogoDesenrola.ai.png";
  const minhasDividas = [
    {
      id: 1,
      empresa: "Netflix",
      logo: "https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png",
      valor: 55.90,
      data_vencimento: "15/04/2025",
      status: "Pendente"
    },
    {
      id: 2,
      empresa: "Amazon Prime",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Amazon_Prime_logo_%282024%29.svg",
      valor: 14.90,
      data_vencimento: "20/04/2025",
      status: "Pendente"
    },
    {
      id: 3,
      empresa: "Disney+",
      logo: "https://logos-world.net/wp-content/uploads/2021/05/Disney-Logo.png",
      valor: 27.90,
      data_vencimento: "10/04/2025",
      status: "Atrasado"
    },
    {
      id: 4,
      empresa: "Spotify",
      logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
      valor: 19.90,
      data_vencimento: "05/04/2025",
      status: "Pago"
    },
    {
      id: 5,
      empresa: "Nu",
      logo: "https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-1.png",
      valor: 327.50,
      data_vencimento: "18/04/2025",
      status: "Pendente"
    }
  ];

  return (
    <div>
<NavigationBar logoDaEmpresa={Logo} logado={false} />
      <div className="exemplo-dividas">
      <h2>Minhas Dívidas</h2>
      <div className="dividas-container">
        {GeradorDividas(minhasDividas)}
      </div>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '64px'
    }}>
      
    <a href='/detalhes-divida' className="btn-continuar"style={{
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }}
    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007bff')}>
      Continuar
    </a>
    </div>
    <div style={{ height: '80px' }} />
    </div>
  )

  //const [dividas, setDividas] = useState<Divida[]>([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState<string | null>(null);

  //useEffect(() => {
    // Função para buscar dados do backend que se conecta ao MySQL
    //async function buscarDividas() {
    //  try {
    //    // Substitua por sua API real
    //    const response = await fetch('/api/dividas');
    //    
    //    if (!response.ok) {
    //      throw new Error('Falha ao buscar dados de dívidas');
    //    }
    //    
    //    const data = await response.json();
    //    setDividas(data);
    //  } catch (err) {
    //    setError('Erro ao carregar dívidas. Por favor, tente novamente.');
    //    console.error(err);
    //  } finally {
    //    setLoading(false);
    //  }
    //}

    //buscarDividas();
  //}, []);

  //if (loading) return <div>Carregando dívidas...</div>;
  //if (error) return <div>Erro: {error}</div>;

  //return (
  //  <div className="minhas-dividas">
  //    <h2>Minhas Dívidas</h2>
  //    <div className="dividas-container">
  //      {dividas.length > 0 ? (
  //        GeradorDividas(dividas)
  //      ) : (
  //        <p>Nenhuma dívida encontrada.</p>
  //      )}
  //    </div>
  //  </div>
  //);
}

export default PaginaDividas;