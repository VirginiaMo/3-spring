import { createContext, useState } from 'react'

export const AppContext = createContext()

const { Provider } = AppContext

export const AppContextProvider = ({ children }) =>{
    const[candidatos, setCandidatos] = useState([]);
    const[tecnologias, setTecnologias] = useState([]);
    const[isCandidatosReady, setIsCandidatosReady] = useState(false);
    const[apiToken, setApiToken] = useState();

    return(
        <Provider value={{candidatos, setCandidatos, apiToken, setApiToken, tecnologias, setTecnologias
        , isCandidatosReady, setIsCandidatosReady}}>
            { children }
        </Provider>
    )
}