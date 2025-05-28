import React from 'react';

function SobreNos() {
  return (
    <section
      id="sobre-nos"
      style={{
        backgroundColor: '#e6f2ff',
        padding: '100px 20px', // Aumentado o espaçamento interno
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Sobre Nós</h2>
      <p style={{ fontSize: '1.5rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
        Bem-vindo à seção Sobre Nós! Aqui você encontrará informações sobre nossa missão, valores e equipe.
      </p>
    </section>
  );
}

export default SobreNos;
