import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./AppWhat_is_it.scss";

const AppWhat_Is_It = () => {

    const { setMainContent, mainHistory } = React.useContext(AppContext);

    return (
        <section className="App_what">
            <h1 className="App_what-title">¿Qué es el código Morse?</h1>
            <h3
                className="App_what-paragraph">
                <strong>El código Morse</strong> es un sistema de representación de letras y número mediante señales emitidas de forma intermitente. Es usado como medio de comunicación y se usa empleando sonidos o rayos de luz y un alfabeto alfanumérico compuesto por puntos y líneas.
                <br /> 
                <br />   
                    Se usa principalmente, hoy en día, como metida a condiciones atmosféricas adversas que no permiten la comunicación por otros medios, como por ejemplo: Las transmisiones de voz.
                <br /> 
                <br /> 
                <strong>Fue creado en el siglo XIX por Samuel Morse y Alfred Vail</strong>. Lee más acerca de la historia y uso en el siguiente enlace: 
                <span onClick={() => setMainContent(mainHistory)} > Historia del código Morse</span>
            .</h3>
        </section>
    );
};

export { AppWhat_Is_It };