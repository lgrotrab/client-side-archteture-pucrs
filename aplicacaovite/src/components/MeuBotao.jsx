import React from "react";

const MeuBotao = () => {
  const handleClick = (event) => {
    alert(`Clicou ${event.currentTarget.id}`);
  };

  return (
    <button id="botao" onClick={handleClick}>
      Clique aqui
    </button>
  );
};

export default MeuBotao;
