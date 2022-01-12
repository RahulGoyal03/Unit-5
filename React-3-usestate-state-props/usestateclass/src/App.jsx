import React, {useState} from 'react'
import "./App.css"
import Counter from './Component/Counter'

const App = () => {

    const [count, setCount] = useState(0)

    const HandleNumber = (value) => {
        setCount(count + value)
    }
    const HandleMulti = (value) => {
        setCount(count * value)
    }

    return (
        <div className='App'>
            <h1>{count}</h1>
            <Counter fn={HandleNumber} mult={HandleMulti}/>
        </div>
    )
}

export default App
