import React, {useState, useEffect} from 'react'
import "./App.css"
import Timer from './Assignment/Timer'



const App = () => {

    const [show, setShow] = useState(false)

    // const [start, setStart] = useState(0)
    // const [end, setEnd] = useState(10)

    return (
            <div className='App'>
            

           {show ? <Timer start={0} end={10} /> : null}
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            </div>
        )
    }

export default App

// <div className='App'>
    
//     {show ? <Timer /> : null}

// <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
// </div>