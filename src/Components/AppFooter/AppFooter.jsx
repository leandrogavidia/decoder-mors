import React from "react";
import { AppContext } from "../AppContext/AppContext";
import { AppRepository } from "../AppRepository/AppRepository";
import "./AppFooter.scss";

const AppFooter = () => {

    const { decoderMorsLogo, textLogo } = React.useContext(AppContext);

    return ( 
        <footer className="App_footer">
            <div className="App_footer-container">
                <img
                    className="App_footer-logo"
                    src={decoderMorsLogo}
                    alt={textLogo}
                    title={textLogo}
                    onClick={() => location.reload()}
                />
                <AppRepository />
            </div>
        </footer>
    );
};

export { AppFooter };