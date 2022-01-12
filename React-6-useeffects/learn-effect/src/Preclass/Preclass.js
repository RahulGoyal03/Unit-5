import React, {useState, useEffect} from 'react'

const Preclass = () => {

    const [count, setCount] = useState(0)


    //useEffect(callback, dependency array)

    useEffect(() => {
        console.log("inside useEffect []")
    },[])
    useEffect(() => {
        console.log("inside useEffect no array")
    })

    useEffect(() => {
        document.title = `clicked ${count}`
    },[count])
    //empty array => no dependencies
    return (
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default Preclass
