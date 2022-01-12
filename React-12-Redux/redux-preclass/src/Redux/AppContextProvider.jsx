import React,{createContext, useState} from 'react'
import { store } from './store';

export const AppContext = createContext()

export const AppContextProvider = ({children, store}) => {
    
    const {dispatch, getState} = store;
    const value = {dispatch, getState}
    const [state, setstate] = useState(0)
    
const forceUpdate = () => setstate(prev => prev + 1)

    store.subscribe(forceUpdate)
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

