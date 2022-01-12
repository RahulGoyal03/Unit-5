import React from 'react'
import Todoinput from './Todoinput'

const Todo = () => {
    const [data, setData] = React.useState([])
    const handleAdd = (title) => {
        const payload = {
            title,
            status : false,
            id : Date.now()
        }
        setData([...data, payload])
    }
    return (
        <div>
            <Todoinput onClick={handleAdd}/>
           
        </div>
    )
}

export default Todo
