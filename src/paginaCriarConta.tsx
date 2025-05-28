import React from 'react';
import NavigationBar from './components/BarraNavegação';
import CreateAccountForm from './components/CriadorConta';
import Footer from './components/Footer';

function PaginaCriarConta() {
  const logo = './icons/LogoDesenrola.ai.png';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      {/* Navbar */}
      <NavigationBar logoDaEmpresa={logo} logado={false} />

      {/* Conteúdo centralizado em coluna */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 1rem'
        }}
      >
        {/* Imagem acima do card */}
        <img
          src={logo}
          alt="Desenrola.Aí"
          style={{
            maxWidth: '200px',
            width: '100%',
            height: 'auto',
            marginBottom: '1rem'
          }}
        />

        {/* Card de criação de conta */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#e6f2ff',
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,123,255,0.3)',
            padding: '1.5rem'
          }}
        >
          <CreateAccountForm />
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default PaginaCriarConta;
