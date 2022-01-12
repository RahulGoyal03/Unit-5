import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addtodo} from '../Redux/action'
const TodoInput = () => {
    const [title, setTitle] = useState("")
     const dispatch = useDispatch()

     const handleAdd = () => {
         const payload = {
             title,
             status : false,
             id : Date.now()
         }
         const addTodoaction = addtodo(payload)
         dispatch(addTodoaction)
     }
    return (
        <div>
            <h3>Add Todo</h3>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='add something'/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default TodoInput
