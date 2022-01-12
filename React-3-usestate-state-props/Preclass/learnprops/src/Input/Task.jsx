import React from 'react'
import { TaskItem } from './TaskItem'

const Task = () => {
  const [query, setQuery] = React.useState("")

  const [tasks, setTasks] = React.useState([])
  const handleChange = (e) => {
    //   console.log(e.target, e.target.value)
    const {value} = e.target
    setQuery(value)
  }

  const handleAdd = () => {
      const payload ={
          title : query,
          status : false
      }
      let newTasks = [...tasks, payload]
      setTasks(newTasks)
  }
    return (
        <div>
            <h1>Task</h1>
            <div>
                <input value={query} 
                onChange={handleChange}
                placeholder='Add somethings'/>
                <button onClick={handleAdd}>ADD</button>
            </div>

            <div>
                {tasks.map(item => {
                    return <div><TaskItem title={item.title}/></div>
                })}
            </div>
            
        </div>
    )
}

export {Task}
