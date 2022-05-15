import React from "react";
import PropTypes from "prop-types";
import loadingDecoderMorsLogo from "@images/logo/loading-decoder-mors-logo.svg";
import decoderMorsLogo from "@images/logo/decodermors-logo.svg";
import closedMenu from "@images/closed-menu.svg";
import openMenu from "@images/open-menu.svg";
import facebookLogo from "@images/social-media/facebook-logo.svg";
import instagramLogo from "@images/social-media/instagram-logo.svg";
import twitterLogo from "@images/social-media/twitter-logo.svg";
import linkedinLogo from "@images/social-media/linkedin-logo.svg";
import githubLogo from "@images/social-media/github-logo.svg";
import { MorseAlphabet, DecodeMessage } from "@utils/morseAlphabet.js";

const AppContext = React.createContext();

const AppProvider = (props) => {

    const mainDecoder = "Decoder";
    const mainWhat_Is_It = "What is it";
    const mainHistory = "History";
    const mainAlphabet = "Alphabet";

    const MorseAlphabetKeys = Object.keys(MorseAlphabet);
    const MorseAlphabetValues = Object.values(MorseAlphabet);

    const MorseAlphabetLetters = MorseAlphabetValues.join("").replace(/[^a-z]/gi, "").split("");
    const MorseAlphabetNumbers = MorseAlphabetValues.join("").replace(/[^0-9]/gi, "").split("");
    const MorseAlphabetSymbols = MorseAlphabetValues.join("").replace(/[a-z0-9]/gi, "").split("");

    const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);
    const [ mainContent, setMainContent ] = React.useState(mainAlphabet);
 
    const updateMenu = () => {
        setIsMenuOpen(prevValue => !prevValue);
    };

    const socialMedia = [
        {
            text: "Facebook Logo",
            image: facebookLogo,
            url: "https://www.facebook.com/LeanderGS/"
        },
        {
            text: "Instagram Logo",
            image: instagramLogo,
            url: "https://www.instagram.com/leander_gs/"
        },
        {
            text: "Twitter Logo",
            image: twitterLogo,
            url: "https://twitter.com/Leander_GS/"
        },
        {
            text: "LinkedIn Logo",
            image: linkedinLogo,
            url: "https://www.linkedin.com/in/leandro-gavidia/"
        },
        {
            text: "GitHub Logo",
            image: githubLogo,
            url: "https://github.com/LeanderGS/"
        }
    ];

    const textLogo = "DecoderMors. Logo";

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
            socialMedia,
            mainDecoder,
            mainWhat_Is_It,
            mainHistory,
            mainAlphabet,
            mainContent,
            setMainContent,
            MorseAlphabetKeys,
            MorseAlphabetValues,
            MorseAlphabetLetters,
            MorseAlphabetNumbers,
            MorseAlphabetSymbols
        }} >
            {props.children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export { AppContext, AppProvider };