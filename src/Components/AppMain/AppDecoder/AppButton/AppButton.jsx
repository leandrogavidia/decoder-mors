import React from "react";
import PropTypes from "prop-types";
import "./AppButton.scss";

const AppButton = ({ buttonText, buttonFunction }) => {
    return (
        <button className="App_decoder-button" onClick={buttonFunction} >{buttonText}</button>
    );
};

AppButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
};

export { AppButton };