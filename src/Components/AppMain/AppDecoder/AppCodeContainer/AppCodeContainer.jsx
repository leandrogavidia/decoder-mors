import React from "react";
import { AppTextarea } from "../AppTextarea/AppTextarea";
import PropTypes from "prop-types";
import "./AppCodeContainer.scss";

const AppCodeContainer = (props) => {

    return (
        <label className="App_decoder-Container">

            <AppTextarea
                defaultValue={props.defaultValue}
                textareaFuction={props.textareaFuction}
                idName={props.idName}
            />
            
            <div className="App_decoder-buttons">
                {props.children}
            </div>
        </label>
    );
};

AppCodeContainer.propTypes = {
    children: PropTypes.element.isRequired,
    defaultValue: PropTypes.string.isRequired,
    textareaFuction: PropTypes.func,
    idName: PropTypes.string
};

export { AppCodeContainer };