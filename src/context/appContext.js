import { createContext, useState } from 'react'

export const AppContext = createContext()

const { Provider } = AppContext

export const AppContextProvider = ({ children }) =>{
    const[candidatos, setCandidatos] = useState([]);

    return(
        <Provider value={{candidatos, setCandidatos}}>
            { children }
        </Provider>
    )
}