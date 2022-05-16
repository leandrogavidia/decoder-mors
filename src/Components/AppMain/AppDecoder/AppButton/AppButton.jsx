import React from "react";
import { AppContext } from "../../../AppContext/AppContext";
import PropTypes from "prop-types";
import "./AppButton.scss";

const AppButton = ({ buttonText, buttonFunction, idName }) => {

    const { inputLenguage, spanish, morse } = React.useContext(AppContext);

    return (
        <button
            id={idName}

            className={
                idName === "morse-button" && inputLenguage === morse
                    ? "App_decoder-button App_decoder-button--active"
                    : idName === "spanish-button" && inputLenguage === spanish
                        ? "App_decoder-button App_decoder-button--active"
                        : "App_decoder-button"
            }

            onClick={buttonFunction} >{buttonText}
        </button>
    );
};

AppButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
    idName: PropTypes.string
};

export { AppButton };