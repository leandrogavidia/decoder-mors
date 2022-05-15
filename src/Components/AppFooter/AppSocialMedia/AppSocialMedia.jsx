import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import { AppSocialButton } from "../AppSocialButton/AppSocialButton";
import "./AppSocialMedia.scss";

const AppSocialMedia = () => {

    const { socialMedia } = React.useContext(AppContext);

    return (
        <div className="App_footer-social-media">
            <h3>Social Media</h3>
            <nav>
                <ul>
                    {socialMedia.map(socialProfile => <AppSocialButton key={socialProfile.url} socialUrl={socialProfile.url} socialImage={socialProfile.image} socialText={socialProfile.text} />)}
                </ul>
            </nav>
        </div>
    );
};

export { AppSocialMedia };