import React from "react";
import { AppHeader } from "../../AppHeader/AppHeader";
import { AppMain } from "../../AppMain/AppMain";
import { AppFooter } from "../../AppFooter/AppFooter";

const AppUI = () => {
    return ( 
        <React.Fragment>
            <AppHeader />
            <AppMain />
            <AppFooter />
        </React.Fragment>
    );
};

export { AppUI };