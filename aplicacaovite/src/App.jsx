import "./App.css";
import { AloMundo } from "./components/AloMundo.jsx";
import { AloMundoColorido } from "./components/AloMundoColorido.jsx";
import MeuBotao from "./components/MeuBotao.jsx";
import MeuBotao2 from "./components/MeuBotao2.jsx";
import { Contador } from "./components/Contador.jsx";
import { ContadorReducer } from "./components/ContadorReducer.jsx";

function App() {
  const handleClick = (event) => {
    alert(`Clicou ${event.currentTarget.id}`);
  };
  return (
    <>
      <AloMundo />
      <AloMundoColorido nome="Mundo" cor="red" />
      <AloMundoColorido nome="Jorge" cor="blue" />
      <AloMundoColorido nome="Filho" cor="green" />
      <div id="divApp" onClick={handleClick}>
        <MeuBotao />
        <MeuBotao2 />
      </div>
      <Contador />
      <ContadorReducer />
    </>
  );
}

export default App;
