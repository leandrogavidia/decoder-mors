import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./AppHistory.scss";

const AppHistory = () => {

    const { setMainContent, mainAlphabet } = React.useContext(AppContext);

    return (
        <section className="App_history">
            <h1 className="App_history-title">Historia del código Morse.</h1>
            <h3
                className="App_history-paragraph">
                    El código Morse tuvo su origen por el inventor y pintor <strong>Samuel Finley Breese Morse</strong>. En el año 1825 Samuel se encontraba realizando una obra de arte en <strong>Washington D.C</strong>. En ese momento recibe la noticia por parte de un mensajero que su esposa, <strong>Lucretia Pickering Walker</strong>, había caído enferma. Al día siguiente recibió una carta por parte de su padre, <strong>Jedidiah Morse</strong>, anunciando que su esposa había fallecido. Ambas noticias llegaron tarde, su esposa tenía varios días de haber fallecido y cuando llego a su hogar, <strong>New Haven</strong>, su esposa ya estaba enterrada.
                <br /> 
                <br />   
                    A raíz de esta tragedía, <strong>Samuel Morse</strong> se motiva a crear un sistema de comunicación más efectivo y rápido. Su motivación fue aumentada luego de la muerta de su padre en 1826 y su madre en 1828, en el año 1829 decide viajar a Europa para recuperarse de estos duros golpes y tomar inspiración de los nuevos inventos en comunicación que se estaban viendo en la región.
                <br /> 
                <br /> 
                En su viaje tuvo la fortuna de conocer a muchas personas y cuando volvió a América, años después, decidió empezar a trabajar en el telégrafo y el alfabeto Morse con la ayuda de <strong>Alfredo Weil</strong>.
                <br /> 
                <br />
                    Es importante mencionar que el telégrafo es un invento que llevaba años de ser creado, solo estaban innovando el invento para qué funcionará de una mejor manera junto con el alfabeto. Un transmisor para abrir y cerrar un circuito eléctrico, un receptor para utilizar un electroimán para registrar la señal y un código para traducir la señal en letras y números.
                <br /> 
                <br />
                    En 1843, finalmente, el Congreso votó 30,000$ para financiar la construcción de una línea telegráfica experimental entre <strong>la capital nacional y Baltimore</strong>. El 24 de mayo de 1844, Morse escribió su famoso mensaje, <strong><q>¡Lo que ha hecho Dios!</q></strong>.
                <br /> 
                <br />
                    A partir de aquí el resto es historia, aprende a usar el alfabeto
                <span onClick={() => setMainContent(mainAlphabet)}> aquí</span>
            .</h3>
        </section>
    );
};

export { AppHistory };