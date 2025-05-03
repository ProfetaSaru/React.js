import React from 'react';

function SobreNos() {
  return (
    <div>
      {/* Add spacing so there's something to scroll down to */}
      <div style={{ height: '100vh' }}></div>

      <section id="sobre-nos" style={{ height: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h2>Sobre Nós</h2>
        <p>
          Bem-vindo à seção Sobre Nós! Aqui você encontrará informações sobre nossa missão, valores e equipe.
        </p>
      </section>
    </div>
  );
}

export default SobreNos;