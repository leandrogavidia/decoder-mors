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
import { MorseAlphabetValues } from "@MorseCode";

const AppContext = React.createContext();

const AppProvider = (props) => {

    const decoderSessionStorage = sessionStorage.getItem("DECODER_V1");
    const lenguageSessionStorage = sessionStorage.getItem("LENGUAGE_V1");
    
    let defaultTextareaCode;
    let lenguageValue;

    if (!decoderSessionStorage) {
        sessionStorage.setItem("DECODER_V1", ". ... -.-. .-. .. -... .   .- .-.. --. ---");
        defaultTextareaCode = ". ... -.-. .-. .. -... .   .- .-.. --. ---";
    } else {
        defaultTextareaCode = decoderSessionStorage;
    }

    if (!lenguageSessionStorage) {
        sessionStorage.setItem("LENGUAGE_V1", "Morse");
        lenguageValue = "Morse";
    } else {
        lenguageValue = lenguageSessionStorage;
    }

    const mainDecoder = "Decoder";
    const mainWhat_Is_It = "What is it";
    const mainHistory = "History";
    const mainAlphabet = "Alphabet";

    const spanish = "Spanish";
    const morse = "Morse";


    const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);
    const [ mainContent, setMainContent ] = React.useState(mainDecoder);
    const [ textareaContent, setTextareaContent ] = React.useState(defaultTextareaCode);
    const [ inputLenguage, setInputLenguage ] = React.useState(lenguageValue);
 
    const updateMenu = () => {
        setIsMenuOpen(prevValue => !prevValue);
    };

    let morseValues = MorseAlphabetValues.join("");
    let templateRegularExpresion = "[^\\s" + morseValues + "]";
    let morseRegularExpresion = new RegExp(templateRegularExpresion, "gi");

    /* morseRegularExpresion

    /[^\sABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890.,¿?¡!:;'´=/()&+-_$@]/gi */

    const onChangeMorseValueText = (event) => {
        const value = event.target.value;
        const newValue = value.replace(/[^\s.-]/gi, "").toUpperCase();

        sessionStorage.setItem("DECODER_V1", newValue);
        setTextareaContent(newValue);
    };

    const onChangeSpanishValueText = (event) => {
        const value = event.target.value;
        const newValue = value.replace(morseRegularExpresion, "").toUpperCase();

        sessionStorage.setItem("DECODER_V1", newValue);
        setTextareaContent(newValue);
    };

    const copyValueText = () => {
        const textareaElement = document.getElementById("textarea-result");
        const content = textareaElement.innerHTML;
        navigator.clipboard.writeText(content)
            .then(
                () => {
                    let newNotification = document.createElement("span");
                    newNotification.setAttribute("class", "App-coder-notification");

                    let contentNotification = document.createTextNode("¡Traducción copiada!");
                    newNotification.appendChild(contentNotification);

                    let buttonsZone = document.getElementsByClassName("App_decoder-buttons")[1];
                    buttonsZone.appendChild(newNotification);
                    
                    setTimeout(() => {
                        buttonsZone.removeChild(newNotification);
                    }, 3000);
                }
            )
            .catch(err => {
                console.error("Hubo un problema:", err);
            });
    };

    const updateLenguage = (option) => {
        sessionStorage.setItem("LENGUAGE_V1", option);
        setInputLenguage(option);
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
            textareaContent,
            setTextareaContent,
            inputLenguage,
            setInputLenguage,
            spanish,
            morse,
            copyValueText,
            onChangeMorseValueText,
            onChangeSpanishValueText,
            updateLenguage
        }} >
            {props.children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export { AppContext, AppProvider };