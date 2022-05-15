import React from "react";
import { AppContext } from "../AppContext/AppContext";

import "./AppHeader.scss";

const AppHeader = () => {

    const { textLogo,
        decoderMorsLogo,
        closedMenu,
        openMenu,
        isMenuOpen,
        updateMenu,
        mainDecoder,
        mainContent,
        mainWhat_Is_It,
        mainHistory,
        mainAlphabet,
        setMainContent
    } = React.useContext(AppContext);

    return (
        <header className="App_header">
            <div className="App_header-container">
                <figure>
                    <picture>
                        <img 
                            className="App_header-logo"
                            src={decoderMorsLogo}
                            alt={textLogo}
                            title={textLogo}
                            onClick={() => location.reload()} 
                        />
                    </picture>
                </figure>

                <figure>
                    <picture>
                        { !isMenuOpen 
                            ? <img
                                className="App_header-menu--closed"
                                src={closedMenu}
                                alt="Menú de navegación cerrado."
                                title="Menú de navegación cerrado."
                                onClick={updateMenu}
                            /> 
                            : <img
                                className="App_header-menu--open"
                                src={openMenu}
                                alt="Menú de navegación abierto"
                                title="Menú de navegación abierto"
                                onClick={updateMenu}
                            />  }

                    </picture>
                </figure>

                <nav className={`App_header-menu ${!isMenuOpen ? "App_header-menu--hidden" : ""}`}>
                    <ul>
                        <li className={mainContent === mainDecoder ? "App_header-item--active" : null } onClick={() => setMainContent(mainDecoder)}>Decodificador</li>
                        <li className={mainContent === mainWhat_Is_It ? "App_header-item--active" : null } onClick={() => setMainContent(mainWhat_Is_It)}>¿Qué es el código Morse?</li>
                        <li className={mainContent === mainHistory ? "App_header-item--active" : null } onClick={() => setMainContent(mainHistory)}>Historia del código Morse</li>
                        <li className={mainContent === mainAlphabet ? "App_header-item--active" : null } onClick={() => setMainContent(mainAlphabet)}>Alfabeto</li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};


export { AppHeader };