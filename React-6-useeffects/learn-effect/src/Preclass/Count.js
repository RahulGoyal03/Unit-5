import React, { useEffect, useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(10)

    useEffect(() => {
        let inter = setInterval(() => {
            
           setCount((prev) => {
               if(prev === 0) {
                   clearInterval(inter)
                   return prev
               }else {
                   return prev - 1
               }
           })
        },1000)
        
        
        return () => {

            clearInterval(inter)
        }
    },[])

    //useeffect has an empty dependency
    //it will get called when the components gets unmounted
    
    //if it has a dependency , count
    // it will get called, everytime count gets updated , but before the useeffect callback is triggered


    return (
        <div>
            <h1>Counter : {count}</h1>
        </div>
    )
}

export default Count
