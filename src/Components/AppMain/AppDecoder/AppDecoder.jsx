import React from "react";
import { AppContext } from "../../AppContext/AppContext";
import { AppTitle } from "./AppTitle/AppTitle";
import { AppCodeContainer } from "./AppCodeContainer/AppCodeContainer";
import { AppSeparator } from "./AppSeparator/AppSeparator";
import { AppButton } from "./AppButton/AppButton";
import { DecodeMessage, encryptMessage } from "@MorseCode";
import "./AppDecoder.scss";

const AppDecoder = () => {

    const { 
        textareaContent,
        setTextareaContent,
        inputLenguage,
        updateLenguage,
        morse,
        spanish,
        copyValueText,
        onChangeMorseValueText,
        onChangeSpanishValueText,
    } = React.useContext(AppContext);
    
    const contentResult = inputLenguage === morse ? DecodeMessage(textareaContent) : encryptMessage(textareaContent);
 
    const deleteContent = () => {
        sessionStorage.removeItem("DECODER_V1");
        setTextareaContent("");
    };
    
    return (
        <section className="App_decoder-section">
            <AppTitle />

            <div className="App_decoder-inputs-container">
                <AppCodeContainer defaultValue={textareaContent} textareaFuction={inputLenguage === morse ? onChangeMorseValueText : onChangeSpanishValueText} idName="textarea-input">
                    <React.Fragment>
                        <AppButton
                            buttonText="Borrar"
                            buttonFunction={deleteContent}
                        />
                        <AppButton
                            idName="morse-button"
                            buttonText="Morse"
                            buttonFunction={() => updateLenguage(morse)}
                        />
                        <AppButton
                            idName="spanish-button"
                            buttonText="Español"
                            buttonFunction={() => updateLenguage(spanish)}
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
            </div>
            
        </section>
    );
};


export { AppDecoder };