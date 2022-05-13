import React from "react";
import PropTypes from "prop-types";
import loadingDecoderMorsLogo from "@images/logo/loading-decoder-mors-logo.svg";
import decoderMorsLogo from "@images/logo/decodermors-logo.svg";
import closedMenu from "@images/closed-menu.svg";
import openMenu from "@images/open-menu.svg";
import githubLogo from "@images/social-media/github-logo.svg";

const AppContext = React.createContext();


const AppProvider = (props) => {

    const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);

    const updateMenu = () => {
        setIsMenuOpen(prevValue => !prevValue);
    };

    const textLogo = "DecoderMors. Logo";
    const textGithub = "GitHub Logo";

    return (
        <AppContext.Provider value={{
            loadingDecoderMorsLogo,
            decoderMorsLogo,
            closedMenu,
            openMenu,
            updateMenu,
            textLogo,
            isMenuOpen,
            setIsMenuOpen,
            githubLogo,
            textGithub
        }} >
            {props.children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export { AppContext, AppProvider };