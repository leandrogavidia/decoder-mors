import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import { MorseAlphabetLetters, MorseAlphabetNumbers, MorseAlphabetSymbols, findMorseValue } from "@MorseCode";
import "./AppAlphabet.scss";


const AppAlphabet = () => {

    const { setMainContent, mainDecoder } = React.useContext(AppContext);

    return (
        <section className="App_alphabet">
            <h1 className="App_alphabet-title">Reglas de uso.</h1>
            <h2 className="App_alphabet-subtitle">Código Morse básico.</h2>
            <ol className="App_alphabet-paragraph">
                <li>
                    Cada carácter dentro del alfabeto está representado con una combinación de puntos y guiones, o valor único.
                    <br/>
                    <br/>
                    Por ejemplo: La letra A esta representada con la combinación de <span>“.-“</span>
                    <br/>
                    <br/>
                    Una mejor forma de entender es ver cada combinación de puntos y guiones como llaves y los caracteres como valores. Por ejemplo, la combinación/llave de <span>“.-..“</span> tiene el valor de la letra <span>“L“</span>.
                </li>
                <li>
                    Para separar un carácter de otro se hace con un espacio entre cada combinación de puntos y guiones, por ejemplo: si sabemos que <span>“.-“</span> es A y <span>“.-..“</span> es L, entonces <span>“.-.. .-“</span> es LA.
                    <br/>
                    <br/>
                    Un ejemplo más completo es la palabra HOLA que en código Morse es: <span>“.... --- .-.. .-“</span>.
                </li>
                <li>
                    Para separar una palabra de otra sería con un triple espacio, ya sabemos como se escribe HOLA, ahora lo combinaremos con otra palabra y estarán separadas:
                    <br/>
                    <br/>
                    <span>“.... --- .-.. .- &nbsp; -- ..- -. -.. ---“</span>  En este anterior mensaje tenemos la oración HOLA MUNDO.
                </li>
                <li>
                Es importante saber que los espacios al inicio y final del mensaje no se tienen en cuenta, es decir si escribes: &nbsp;<span>“&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .... --- .-.. .-   -- ..- -. -.. --- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“</span> no tendrás <span>“&nbsp; HOLA MUNDO &nbsp;“</span> sino <span>“HOLA MUNDO”</span>. 
                </li>
            </ol
            >
            <h2 className="App_alphabet-subtitle">Frases estandarizadas.</h2>
            <h3 className="App_alphabet-paragraph App_alphabet-standars">En el código Morse existen frases ya estándar para enviar mensajes, cada una con su objetivo específico. Existen varias, pero te dejaré 3, la más popular sin duda es la de enviar el mensaje SOS.</h3>
            
            <ul className="App_alphabet-paragraph">
                <li><strong>SOS</strong> - Señal internacional de ayuda: &nbsp; <span>... --- ...</span></li>
                <li><strong>INCENDIO</strong> - Cuando detectes fuego: &nbsp; <span>.. -. -.-. . -. -.. .. ---</span></li>
                <li><strong>TE AMO</strong> - Para enviar un mensaje de amor: &nbsp; <span>- . &nbsp; .- -- ---</span></li>
            </ul>

            <h3  className="App_alphabet-paragraph">También existen caracteres especiales o de habla hispana como el simbolo <span>“?“</span> o la letra <span>“Ñ“</span>.</h3>

            <h2 className="App_alphabet-subtitle">Alfabeto.</h2>

            <div className="App_alphabet-values App_alphabet-values--first">
                {MorseAlphabetLetters.map(letter => <p key={letter}><strong>{`${letter}:`}</strong> {findMorseValue(letter)}</p>)}
            </div>

            <div className="App_alphabet-values App_alphabet-values--second">
                {MorseAlphabetNumbers.map(number => <p key={number}><strong>{`${number}:`}</strong> {findMorseValue(number)}</p>)}
            </div>

            <div className="App_alphabet-values">
                {MorseAlphabetSymbols.map(symbol => <p key={symbol}><strong>{`${symbol}:`}</strong> {findMorseValue(symbol)}</p>)}
            </div>
            
            <p onClick={() => setMainContent(mainDecoder)} >¡Comienza a decodificar ahora!</p>
        </section>
    );
};

export { AppAlphabet };