import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonDefault from './components/ButtonDefault';
import Input from './components/Input'

const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color:red;
  background-color: black;
  width: 100%;
  height: 100px;
  text-align: center;

`;

function App() {
  
  const [incremento, setIncremento] = useState(0);
  const [divTexto, setDivTexto] = useState("");

  useEffect(() => {

    document.title = `Valor: ${incremento}`;


  }, [incremento]);

  // function buscarTexto(novoTexto) {
  //   setDivTexto(novoTexto);
  // }

  return (
    <>
      <H1>Bora contar: {incremento}</H1>
      <ButtonDefault texto="Incremento" click={() => setIncremento(incremento + 1)}/>
      <Input texto={(novoTexto) => setDivTexto(novoTexto)} />
      <div>
        Texto do INPUT: {divTexto}
      </div>

    </>
  );
}

export default App;
