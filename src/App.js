import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonDefault from './components/ButtonDefault';

const H1 = styled.h1`
  color:red;
  background-color: black;
  width: 300px;
  height: 100px;
  text-align: center;

`;


function App() {
  
  const [incremento, setIncremento] = useState(0);

  useEffect(() => {

    document.title = `Valor: ${incremento}`;


  }, [incremento]);

  return (
    <>
      <H1>Bora contar: {incremento}</H1>
      <ButtonDefault texto="Incremento" click={() => setIncremento(incremento + 1)}/>
    </>
  );
}

export default App;
