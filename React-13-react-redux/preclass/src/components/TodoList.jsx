import React from 'react'
import { useSelector } from 'react-redux'
const TodoList = () => {
    const todos = useSelector((state) => state.todo)
    console.log(todos)
    return (
        <div>

            {
                todos.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </div>
    )
}

export default TodoList
