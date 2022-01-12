import React,{useContext} from 'react'
import Cart from './Cart'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            Theme is : {theme}
            <button onClick={() => toggleTheme()}>Change Theme</button>
            <Cart/>
        </div>
    )
}

export default Navbar
