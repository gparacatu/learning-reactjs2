import React from 'react';
import styled from "styled-components";

const BUTTON = styled.button`

  background-color: white;
  border: 2px solid red;
  width: 300px;
  height: 100px;
  font-size: 20px;
  color: red;
  font-weight: bold;

`;

function ButtonDefault(props) {

    return (
        <>
            <BUTTON onClick={props.click} >{props.texto}</BUTTON>
        </>
    );

}

export default ButtonDefault;