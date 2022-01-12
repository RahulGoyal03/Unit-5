import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Form = () => {

    const [form, setForm] = useState({})

    const {toggleAuth} = useContext(AuthContext)

    const handlechange = (e) => {
        let {name , value} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const postForm = () => {
        fetch("https://reqres.in/api/login", {
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then((res) =>  {
            if(res.error) {
                alert("user not found")
            }else {
                toggleAuth(res.token)
            }
        })
    }

    return (
        <div>
            <input type="email" name='email' placeholder='enter your email' onChange={(e) => handlechange(e)}/>
            <input type="password" name='password' placeholder='enter your password' onChange={(e) => handlechange(e)}/>
            <button onClick={postForm}>Submit</button>
        </div>
    )
}

export default Form
