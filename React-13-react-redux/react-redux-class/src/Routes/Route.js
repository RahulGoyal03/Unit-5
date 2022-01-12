import React from 'react'
import Todo from '../component/Todo'
import {Routes, Route} from 'react-router-dom'
import TodoData from '../component/TodoData'
import TodoEdit from '../component/TodoEdit'
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Todo/>}></Route>
            <Route path="/todo/:id" element={<TodoData/>}></Route>
            <Route path="/todo/:id/edit" element={<TodoEdit />}></Route>
        </Routes>
    )
}

export default Routing
