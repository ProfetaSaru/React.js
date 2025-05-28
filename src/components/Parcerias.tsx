import React from 'react';

interface Parceiro {
  nome: string;
  logo: string;
  descricao: string;
}

const parceiros: Parceiro[] = [
  {
    nome: "USJT - Universidade São Judas Tadeu",
    logo: "/icons/LogoUSJT.png",
    descricao: "A USJT - Universidade São Judas Tadeu é uma parceira acadêmica fundamental, dedicada à formação de talentos qualificados para o mercado de trabalho. Através de seus cursos e programas, promove o desenvolvimento de competências essenciais, alinhando teoria e prática para preparar profissionais inovadores.",
  },
  {
    nome: "Ânima Educação",
    logo: "/icons/LogoAnima.png",
    descricao: "O Grupo Ânima Educação é uma instituição comprometida com a promoção da inclusão digital e da educação financeira.  Por meio de iniciativas inovadoras, busca capacitar pessoas de diferentes perfis e realidades sociais, proporcionando conhecimento e ferramentas essenciais para o desenvolvimento pessoal e profissional.",
  },
];

function Parcerias() {
  return (
    <section
      id="parcerias"
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        padding: '40px 20px',
      }}
    >
      <h2
        className="text-center mb-5"
        style={{ fontSize: '3rem' }}
      >
        Nossas Parcerias
      </h2>
      <div className="container">
        <div
          style={{
            display: 'flex',
            gap: '40px',          // Espaço entre cards
            flexWrap: 'wrap',     // Quebra para telas pequenas
            justifyContent: 'space-between',
          }}
        >
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 400px', // Cresce, encolhe, base 400px
                maxWidth: '600px', // Limita tamanho máximo
                textAlign: 'center',
                padding: '40px',
                border: '2px solid #ccc',
                borderRadius: '15px',
                boxShadow: '0 4px 15px #007BFF',
                backgroundColor: '#e6f2ff',
              }}
            >
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.nome}`}
                style={{
                  maxWidth: '300px',
                  maxHeight: '180px',
                  marginBottom: '30px',
                  objectFit: 'contain',
                }}
              />
              <h3 style={{ fontSize: '2rem' }}>{parceiro.nome}</h3>
              <p style={{ fontSize: '1.4rem' }}>{parceiro.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parcerias;
