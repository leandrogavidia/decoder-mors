import React from "react";
import { AppContext } from "../AppContext/AppContext";

const AppRepository = () => {

    const { githubLogo, textGithub} = React.useContext(AppContext);

    return (
        <div>
            <h3>REPOSITORIO</h3>
            <img src={githubLogo} alt={textGithub} title={textGithub} />
        </div>
    );
};

export { AppRepository };