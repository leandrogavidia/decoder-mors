import React from "react";
import { AppTitle } from "./AppTitle/AppTitle";
import { AppCodeContainer } from "./AppCodeContainer/AppCodeContainer";
import { AppSeparator } from "./AppSeparator/AppSeparator";

const AppDecoder = () => {
    return (
        <React.Fragment>
            <AppTitle />
            <AppCodeContainer />
            <AppSeparator />
            <AppCodeContainer />
        </React.Fragment>
    );
};

export { AppDecoder };