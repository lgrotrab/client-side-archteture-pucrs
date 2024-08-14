import { useReducer } from "react";

// Função reducer que gerencia as ações de incremento e decremento do contador
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // Incrementa o valor do contador no estado atual
      return { contador: state.contador + action.value };
    case "decrement":
      // Decrementa o valor do contador no estado atual
      return { contador: state.contador - action.value };
    default:
      // Lança um erro para ações desconhecidas
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// Componente que utiliza o useReducer para gerenciar o estado do contador
export function ContadorReducer() {
  // Inicializa o estado com o valor inicial do contador e a função dispatch
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      {/* Exibe o valor atual do contador */}
      <h1>{state.contador}</h1>
      {/* Botão para incrementar o valor do contador */}
      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        Incrementar
      </button>
      {/* Botão para decrementar o valor do contador */}
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Decrementar
      </button>
    </div>
  );
}
