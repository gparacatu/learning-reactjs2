import React from 'react';
import styled from "styled-components";

const BUTTON = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;  
  background-color: white;
  border: 2px solid red;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: red;
  font-weight: bold;
  margin: auto;
  border-radius: 4px;

`;

function ButtonDefault(props) {

    return (
        <>
            <BUTTON onClick={props.click} >{props.texto}</BUTTON>
        </>
    );

}

export default ButtonDefault;