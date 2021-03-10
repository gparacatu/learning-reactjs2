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

const LI = styled.li`
  padding: 10px 0px;
`;

function App() {
  
  const [incremento, setIncremento] = useState(0);
  const [divTexto, setDivTexto] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {

    document.title = `Valor: ${incremento}`;


  }, [incremento]);

  useEffect(() => {

    setList([

      {titulo: "Acordar cedo", feito: false},
      {titulo: "Tomar banho", feito: false},
      {titulo: "Tomar café", feito: false},
      {titulo: "Estudar muito", feito: false}

    ]);

  }, []);

  // function buscarTexto(novoTexto) {
  //   setDivTexto(novoTexto);
  // }
  function addValor(novoValor) {
    let novaLista = [...list, {titulo: novoValor, feito: false}];
    setList(novaLista);
  }

  function alterarStatus(index) {
    let novaLista = [...list];
    novaLista[index].feito = !novaLista[index].feito;

    setList(novaLista);
  }

  return (
    <>
      <H1>Bora contar: {incremento}</H1>
      <ButtonDefault texto="Incremento" click={() => setIncremento(incremento + 1)}/>
      <Input texto={(novoTexto) => setDivTexto(novoTexto)} valorLista={addValor} placeholder="Digite uma nova tarefa e pressione <Enter>..."/>
      <div>
        Caractere{divTexto.length > 1 && "s"} : {divTexto.length}
      </div>
      <hr/>
      <div>
        <ul>

          {
            list.map((item, index) => 
            (
              <LI key={index}>
                <del>{item.feito &&
                 `${item.titulo}`}</del>
                 {!item.feito &&
                 `${item.titulo}`}  
                <input type="checkbox" onClick={() => alterarStatus(index)}/>         
              </LI>
              
            ))
          }

        </ul>
      </div>
    </>
  );
}

export default App;
