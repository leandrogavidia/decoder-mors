import React from "react";
import { AppContext } from "../../../AppContext/AppContext";
import "./AppTitle.scss";

const AppTitle = () => {

    const { setMainContent, mainAlphabet, inputLenguage, morse } = React.useContext(AppContext);

    return(
        <React.Fragment>
            <h1 className="App_decoder-title">
                ¡Comienza a escribir algo! Puedes leer el alfabeto
                <span onClick={() => setMainContent(mainAlphabet)} className="App_decoder-link"> aquí</span>
                .
            </h1>
            <p className="App_decoder-paragraph">{inputLenguage === morse
                ? "En el modo \"Morse\" solo puedes escribir: puntos, guiones y espacios."
                : "En el modo \"español\" solo puedes escribir los caracteres disponibles en el alfabeto de DecodeMors."
            }</p>
        </React.Fragment>
    );
};

export { AppTitle };