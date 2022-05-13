import React from "react";
import "./AppTitle.scss";

const AppTitle = () => {
    return(
        <h1 className="App_title">
            ¡Comienza a escribir algo! Puedes leer el alfabeto
            <span className="App_enlace-alfabeto"> aquí</span>
            .
        </h1>
    );
};

export { AppTitle };