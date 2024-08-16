import { useState, useEffect } from "react";

export function Relogio() {
  const [hora, setHora] = useState(new Date());
  useEffect(() => {
    function tick() {
      setHora(new Date());
    }
    const temporizador = setInterval(tick, 1000);
    return () => {
      clearInterval(temporizador);
    };
  }, []);
  return (
    <div>
      <h1>Relógio</h1>
      <p>Agora são {hora.toLocaleTimeString()}.</p>
    </div>
  );
}
