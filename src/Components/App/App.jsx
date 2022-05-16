import React from "react";
import { AppProvider } from "../AppContext/AppContext";
import { AppLoading } from "./AppLoading/AppLoading";
import { AppUI } from "./AppUI/AppUI";
import "./App.scss";

function App() {

    const [seeInterface, setSeeInterface] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setSeeInterface(prevState => !prevState);
        }, 3000);
    }, []);

    return (
        <AppProvider>
            { seeInterface
                ? <AppUI />
                : <AppLoading /> 
            }
        </AppProvider>
    );
}

export { App };