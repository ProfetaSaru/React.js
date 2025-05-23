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
    descricao: "Parceira acadêmica na formação de talentos e pesquisa em inovação tecnológica.",
  },
  {
    nome: "Ânima Educação",
    logo: "/icons/LogoAnima.png",
    descricao: "Grupo educacional que impulsiona iniciativas de inclusão digital e educação financeira.",
  },
];

function Parcerias() {
  return (
    <section
      id="parcerias"
      style={{
        minHeight: '100vh',
        backgroundColor: '#e6f2ff',
        padding: '40px 20px',
      }}
    >
      <h2 className="text-center mb-5">Nossas Parcerias</h2>
      <div className="container">
        <div className="row justify-content-center">
          {parceiros.map((parceiro, index) => (
            <div key={index} className="col-md-5 text-center mb-4">
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.nome}`}
                style={{
                  maxWidth: '160px',
                  maxHeight: '100px',
                  marginBottom: '15px',
                  objectFit: 'contain',
                }}
              />
              <h5>{parceiro.nome}</h5>
              <p>{parceiro.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parcerias;
