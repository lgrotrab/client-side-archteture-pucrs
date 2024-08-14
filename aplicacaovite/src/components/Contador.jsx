import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);
  function handleClick() {
    //setContador(contador + 1);
    setContador((contadorAtual) => contadorAtual + 1);
  }

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}
