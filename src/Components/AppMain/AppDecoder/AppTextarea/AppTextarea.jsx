import React from "react";
import PropTypes from "prop-types";
import "./AppTextarea.scss";

const AppTextarea = ({defaultValue, textareaFuction, idName}) => {
    
    return (
        <textarea 
            className="App_decoder-textarea" 
            name="textarea"
            value={defaultValue}
            onChange={textareaFuction}
            id={idName}
            disabled={idName === "textarea-result" ? true : false}
            autoFocus={idName === "textarea-input" ? true : false}
            placeholder={idName === "textarea-result" ? "Traducción" : null}
        >
        </textarea>
    );
};

AppTextarea.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    textareaFuction: PropTypes.func,
    idName: PropTypes.string,
};

export { AppTextarea };