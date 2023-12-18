import React from 'react'
import './../hojas-estilo/Boton.css'
function Boton({texto, esBotonDeClic, gestionClick}){

    return (
        <button className={esBotonDeClic?'boton-clic':'boton-reinicio'} onClick={gestionClick}>
            {texto}
        </button>
    );
}

export default Boton;