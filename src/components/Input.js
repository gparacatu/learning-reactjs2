import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const INPUT = styled.input`
    width: 300px;
    height: 50px;
    border: 1px solid black;
    border-radius: 4px;
    color: #GGG;

`;

function Input(props) {
    const [inputTexto, setInputTexto] = useState("");
    
    // useEffect(() => {

    //     props.texto(inputTexto);

    // }, [inputTexto, props]);

    props.texto(inputTexto);
    
    return (

        <>
            <INPUT 
            id={props.id || ""}
            type={props.type || "text"}
            name={props.name || ""}
            value={inputTexto}
            placeholder={props.placeholder || ""}
            className={props.className || ""}
            onChange={(e) => setInputTexto(e.target.value)}
            />
        </>

    );

}

export default Input;