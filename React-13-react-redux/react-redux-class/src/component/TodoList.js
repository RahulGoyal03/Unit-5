import React,{useState, useEffect} from 'react'
import './todolist.css'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
const TodoList = ({todos}) => {


    const navigate = useNavigate()
    const handleStatus =async (id) => {

        let res = await fetch(`http://localhost:5000/todo/${id}`)
        let dat = await res.json()

        const payload = {
            title : dat.title,
            status : !dat.status
        }

         fetch(`http://localhost:5000/todo/${id}`, {
            method : "PUT",
            body : JSON.stringify(payload),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res) => res.json()).then((res) => {

            navigate("/")
        })
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        })
    }

    return (
        <div className='todobox'>
            {
                todos.map((e) => (
                    <div className='item'>
                    <Link to={`/todo/${e.id}`} className='link div'>
                    <div key={e.id} className='div'>
                        <p>{e.title}</p>
                    </div>
                    </Link>
                        <button onClick={() => handleStatus(e.id)}>{e.status ? "Completed" : 'Mark Complete'}</button>
                    <Link to={`/todo/${e.id}/edit`} className='link'><button>Edit</button></Link>
                    <button className='delete' onClick={() => handleDelete(e.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList
