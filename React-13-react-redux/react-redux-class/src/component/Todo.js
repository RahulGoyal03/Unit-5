import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../Redux/action'
import TodoList from './TodoList'
import './todo.css'
const Todo = () => {

    const [text, setText] = useState('')

    const [todos, setTodos] = useState([])

    const getTodo = async () => {
        let res = await fetch("http://localhost:5000/todo")
        let dat = await res.json()
        setTodos(dat)
    }
    

    useEffect(() => {
       getTodo()
    })

    const dispatch = useDispatch()

    const handleAdd = () => {
        const payload = {
            title : text,
            status: false,
        }
        fetch("http://localhost:5000/todo", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then((res) => {
            dispatch(addTodo(res))
        })
    
        getTodo()
        setText("")
    }

    return (
        <>
        <div className='main_box'>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <button onClick={handleAdd}>Add Todo</button>
        </div>
            <div >
                <TodoList todos={todos}/>
               
            </div>
        </>
    )
}

export default Todo
