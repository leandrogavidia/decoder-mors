import React from "react";
import { AppContext } from "../AppContext/AppContext";

import "./AppHeader.scss";

const AppHeader = () => {

    const { textLogo,
        decoderMorsLogo,
        closedMenu,
        openMenu,
        isMenuOpen,
        updateMenu
    } = React.useContext(AppContext);

    return (
        <header className="header">
            <div className="header_container">
                <figure>
                    <picture>
                        <img 
                            className="header_logo"
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
                                className="header_menu--closed"
                                src={closedMenu}
                                alt="Menú de navegación cerrado."
                                title="Menú de navegación cerrado."
                                onClick={updateMenu}
                            /> 
                            : <img
                                className="header_menu--closed"
                                src={openMenu}
                                alt="Menú de navegación cerrado."
                                title="Menú de navegación cerrado."
                                onClick={updateMenu}
                            />  }

                    </picture>
                </figure>

                <nav className={`header_menu ${!isMenuOpen ? "header_menu--hidden" : ""}`}>
                    <ul>
                        <li>Decodificador</li>
                        <li>¿Qué es el código Morse?</li>
                        <li>Historia del código Morse</li>
                        <li>Alfabeto</li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};


export { AppHeader };