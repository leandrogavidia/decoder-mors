import React from "react";
import PropTypes from "prop-types";
import "./AppSocialButton.scss";

const AppSocialButton = ({ socialUrl, socialImage, socialText }) => {
    return (
        <a className="App_footer-social-button" href={socialUrl} target="_blank" rel="noreferrer">
            <img src={socialImage} alt={socialText} title={socialText} />
        </a>
    );
};

AppSocialButton.propTypes = {
    socialUrl: PropTypes.string.isRequired,
    socialImage: PropTypes.string.isRequired,
    socialText: PropTypes.string.isRequired,

};

export { AppSocialButton };