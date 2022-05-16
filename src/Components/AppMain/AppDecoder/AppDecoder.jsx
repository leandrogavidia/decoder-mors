import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import { AppTitle } from "./AppTitle/AppTitle";
import { AppCodeContainer } from "./AppCodeContainer/AppCodeContainer";
import { AppSeparator } from "./AppSeparator/AppSeparator";
import { AppButton } from "./AppButton/AppButton";
import { DecodeMessage, encryptMessage } from "@MorseCode";

const AppDecoder = () => {

    const { 
        textareaContent,
        setTextareaContent,
        inputLenguage,
        setInputLenguage,
        morse,
        spanish,
        copyValueText,
        onChangeMorseValueText,
        onChangeSpanishValueText
    } = React.useContext(AppContext);
    
    const contentResult = inputLenguage === morse ? DecodeMessage(textareaContent) : encryptMessage(textareaContent);

    return (
        <React.Fragment>
            <AppTitle />
            
            <AppCodeContainer defaultValue={textareaContent} textareaFuction={inputLenguage === morse ? onChangeMorseValueText : onChangeSpanishValueText} idName="textarea-input">
                <React.Fragment>
                    <AppButton
                        buttonText="Borrar"
                        buttonFunction={() => setTextareaContent("")}
                    />
                    <AppButton
                        idName="morse-button"
                        buttonText="Morse"
                        buttonFunction={() => setInputLenguage(morse)}
                    />
                    <AppButton
                        idName="spanish-button"
                        buttonText="Español"
                        buttonFunction={() => setInputLenguage(spanish)}
                    />
                </React.Fragment>
            </AppCodeContainer >

            <AppSeparator />
            
            <AppCodeContainer defaultValue={contentResult} idName="textarea-result" >
                <AppButton
                    buttonText="Copiar"
                    buttonFunction={copyValueText}
                />
            </AppCodeContainer >
        </React.Fragment>
    );
};


export { AppDecoder };