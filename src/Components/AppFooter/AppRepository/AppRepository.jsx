import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./AppRepository.scss";

const AppRepository = () => {

    const { socialMedia } = React.useContext(AppContext);
    const { image, text } = socialMedia[4];

    return (
        <a href="https://google.com" target="_blank" rel="noreferrer">
            <div className="App_footer-repository">
                <h3>REPOSITORIO</h3>
                <img src={image} alt={text} title={text} />
            </div>
        </a>
    );
};

export { AppRepository };