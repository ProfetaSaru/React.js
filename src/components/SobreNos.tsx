import React from 'react';

function SobreNos() {
  return (
    <section
      id="sobre-nos"
      style={{
        backgroundColor: '#e6f2ff',
        borderTop: '4px solid #66a3ff',
        borderBottom: '4px solid #66a3ff',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Sobre Nós</h2>

      
      <hr
        style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#66a3ff',
          border: 'none',
          margin: '0 auto 40px',
          borderRadius: '2px',
        }}
      />

      <p
        style={{
          fontSize: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.8',
        }}
      >
        Bem-vindo à seção Sobre Nós! Aqui você encontrará informações sobre nossa
        missão, valores e equipe.
      </p>
    </section>
  );
}

export default SobreNos;
