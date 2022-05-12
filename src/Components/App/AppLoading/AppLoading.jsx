import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./AppLoading.scss";

const AppLoading = () => {

    const { textLogo, loadingDecoderMorsLogo } = React.useContext(AppContext);

    return (
        <img className="AppLoading" src={loadingDecoderMorsLogo} alt={textLogo} title={textLogo} />
    );
};


export { AppLoading }; 