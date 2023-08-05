import React,{useState} from "react";
import MensajesHeaderChino from '../assets/data/header/cn/index.json';
import MensajesHeaderAleman from '../assets/data/header/de/index.json';
import MensajesHeaderFrances from '../assets/data/header/fr/index.json';
import MensajesHeaderItaliano from '../assets/data/header/it/index.json';
import MensajesHeaderJapones from '../assets/data/header/jp/index.json';
import MensajesHeaderPortugues from '../assets/data/header/pt/index.json';
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
            case 'pt':
                console.log('lo nuevo pt');
                setMessages(MensajesHeaderPortugues);
                setLocal('pt');
                break;
            case 'it':
                console.log('lo nuevo it');
                setMessages(MensajesHeaderItaliano);
                setLocal('it');
                break;
             case 'fr':
                console.log('lo nuevo fr');
                setMessages(MensajesHeaderFrances);
                setLocal('fr');
                break;
             case 'de':
                console.log(' lo nuevo de');
                setMessages(MensajesHeaderAleman);
                setLocal('de');
                break;
             case 'cn':
                console.log('entre cn');
                setMessages(MensajesHeaderChino);
                setLocal('cn');
                break;
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
            case 'jp':
                    console.log("entre a jp");
                    setMessages(MensajesHeaderJapones);
                    setLocal('jp');
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