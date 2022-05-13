import React from "react";
import { AppTitle } from "../AppTitle/AppTitle";
import { AppTextarea } from "../AppTextarea/AppTextarea";
import { AppSeparator } from "../AppSeparator/AppSeparator";

const AppMain = () => {
    return(
        <main>
            <AppTitle/>
            <AppTextarea />
            <AppSeparator/>
            <AppTextarea />
        </main>
    );
};

export { AppMain };