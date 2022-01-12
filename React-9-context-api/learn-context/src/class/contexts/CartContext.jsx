import { createContext, useState } from "react";


export const CartContext = createContext() //type



export const CartContextProvider = ({children}) => {   //Context Provider
    
    const [cart, setCart] = useState(0)
    
    const handleCartUpdate = (value) => {
        setCart(cart + value)
    }
    
    return <CartContext.Provider value={{cart, handleCartUpdate}}>
        {children}
    </CartContext.Provider>
}







































