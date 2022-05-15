import React from "react";
import { AppContext } from "../AppContext/AppContext";
import { AppDecoder } from "./AppDecoder/AppDecoder";
import { AppWhat_Is_It } from "./AppWhat_Is_It/AppWhat_Is_It";
import { AppHistory } from "./AppHistory/AppHistory";
import { AppAlphabet } from "./AppAlphabet/AppAlphabet";

const AppMain = () => {

    const { mainContent,
        mainDecoder, 
        mainWhat_Is_It, 
        mainHistory,
        mainAlphabet
    } = React.useContext(AppContext);

    if (mainContent === mainDecoder) {
        return (
            <main>
                <AppDecoder />
            </main>
        );
    } else if (mainContent === mainWhat_Is_It) {
        return (
            <main>
                <AppWhat_Is_It />
            </main>
        );  
    } else if (mainContent === mainHistory) {
        return (
            <main>
                <AppHistory />
            </main>
        );
    } else if (mainContent === mainAlphabet) {
        return (
            <main>
                <AppAlphabet />
            </main>
        );
    }
};

export { AppMain };