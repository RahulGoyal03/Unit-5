import React,{useState, useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {

    const {token , handleToken} = useContext(AuthContext)
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    const handleChange = ({target : {name, value}}) => {
        setForm({
            ...form,
            [name] : value
        })
    }

    return (
        <div>
            <input type="text" name='email' onClick={(e) => handleChange(e)} placeholder='email' />
            <input type="text" name='password'  onClick={(e) => handleChange(e)} placeholder='password'/>
            <button onClick={() => {
            handleToken("1234567")
            navigate(-1)
            }}>SingIn</button>
        </div>
    )
}

export default Login
