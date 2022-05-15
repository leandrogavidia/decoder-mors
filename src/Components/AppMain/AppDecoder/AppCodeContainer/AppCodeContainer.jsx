import React from "react";
import { AppButton } from "../AppButton/AppButton";
import { AppTextarea } from "../AppTextarea/AppTextarea";
import "./AppCodeContainer.scss";

const AppCodeContainer = () => {
    return (
        <section className="App_decoder-Container">
            <AppTextarea />
            <div className="App_decoder-buttons">
                <AppButton buttonText="Borrar" buttonFunction={() => console.log("Borrar")} />
                <AppButton buttonText="Morse" buttonFunction={() => console.log("Morse")} />
                <AppButton buttonText="Español" buttonFunction={() => console.log("Español")} />
            </div>
        </section>
    );
};

export { AppCodeContainer };