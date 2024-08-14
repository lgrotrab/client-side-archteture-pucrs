import React from "react";

const MeuBotao2 = () => {
  const handleClick = (event) => {
    event.stopPropagation();
    alert(`Clicou ${event.currentTarget.id}`);
  };

  return (
    <button id="botao2" onClick={handleClick}>
      Clique aqui
    </button>
  );
};

export default MeuBotao2;
