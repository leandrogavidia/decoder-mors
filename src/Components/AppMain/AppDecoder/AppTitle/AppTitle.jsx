import React from "react";
import { AppContext } from "../../../AppContext/AppContext";
import "./AppTitle.scss";

const AppTitle = () => {

    const { setMainContent, mainAlphabet } = React.useContext(AppContext);

    return(
        <h1 className="App_decoder-title">
            ¡Comienza a escribir algo! Puedes leer el alfabeto
            <span onClick={() => setMainContent(mainAlphabet)} className="App_decoder-link"> aquí</span>
            .
        </h1>
    );
};

export { AppTitle };