import React from 'react'

const TodoItem = ({title, status,id,handleToggle}) => {


    return (
        <>

            <div>{title} - {status ? "Done" : "Not Done"}</div>
            <button onClick={() => handleToggle(id)}>Mark as Done</button>
        </>
    )
}

export default TodoItem
