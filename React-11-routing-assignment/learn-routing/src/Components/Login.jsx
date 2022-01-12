import React,{useContext} from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {

    const {handleToken, token}  = useContext(AuthContext)
    const navigate = useNavigate()

    if(token) {
     return   <Navigate to={"/"} />
    }

    return (
        <div>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='password'/>
            <button onClick={() => {
                handleToken("1234567")
                navigate("/")
            }}>Login</button>
        </div>
    )
}

export default Login
