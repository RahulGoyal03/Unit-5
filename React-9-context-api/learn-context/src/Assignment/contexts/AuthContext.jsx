import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)

    const [token, setToken] = useState("")

    const toggleAuth = (token) => {
        if(token) {
            setIsAuth(!isAuth)
            setToken(token)
        }
    }


    return <AuthContext.Provider value={{isAuth, token, toggleAuth}}>
        {children}
    </AuthContext.Provider>
}