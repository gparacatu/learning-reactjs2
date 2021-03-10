import React, {useState} from 'react';
import styled from "styled-components";

const INPUT = styled.input`
    width: 300px;
    height: 50px;
    border: 1px solid black;
    border-radius: 4px;
    color: #GGG;
    margin-top: 50px;
    padding: 0px 10px;

`;

function Input(props) {
    const [inputTexto, setInputTexto] = useState("");
    
    // useEffect(() => {

    //     props.texto(inputTexto);

    // }, [inputTexto, props]);

    props.texto(inputTexto);

    function enviarTecla(e) {
        if(e.key === "Enter") {
           
            if (props.valorLista) {
                props.valorLista(inputTexto);
            }
            setInputTexto("");
        }
    }

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
            onKeyUp={enviarTecla}
            />
        </>

    );

}

export default Input;