import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about" style={{margin : "0 20px"}}>About</Link>
            <Link to="/contact"  style={{margin : "0 20px"}}>Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/login" style={{margin : "0 20px"}}>Login</Link>
        </div>
    )
}

export default Navbar
