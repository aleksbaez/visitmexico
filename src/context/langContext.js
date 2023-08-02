import React,{useState} from "react";
import MensajesHeaderIngles from '../assets/data/header/en/index.json';
import MensajesHeaderEspanol from '../assets/data/header/sp/index.json';
import { IntlProvider } from "react-intl";

const langContext=React.createContext();

const LangProvider=({children})=>{
    const [messages, setMessages]=useState(MensajesHeaderEspanol);
    const [local, setLocal]=useState('sp');

    const setLenguage=(idioma) =>{
        console.log("antes:"+idioma);
        switch(idioma){
            case 'en':
                console.log("entre a en");
                setMessages(MensajesHeaderIngles);
                setLocal('en');
                break;
            case 'sp':
                console.log("entre a sp");
                setMessages(MensajesHeaderEspanol);
                setLocal('sp');
                break;
            default:
                console.log("entre a default");
                setMessages(MensajesHeaderEspanol);
                setLocal('sp');


        }
    }
    
    return (
        <langContext.Provider value={{setLenguage: setLenguage,messages:messages}}>
            <IntlProvider locale={local} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
export {LangProvider, langContext};