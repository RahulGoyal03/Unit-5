import "./Todo.css"

import React from 'react'

const Todo = ({num, children}) => {
    return (
        <div>

            <h1 className="heading">
                Todo : {num} | {children}
            </h1>

            
        </div>
    )
}

export default Todo
