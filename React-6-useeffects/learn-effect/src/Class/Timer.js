import React,{useEffect, useState} from 'react'

const Timer = () => {

    const [counter, setCounter] = useState(10)

    useEffect(() => {

       let tim = setInterval(() => {
          
            setCounter((p) => {
            if(p === 0) {
                clearInterval(tim)
                return p
            }else {
             return   p - 1
            }
            })

            
            // setCounter((p) => p > 0 ? p-1 : p) // should not use bcz interval is still running
        },1000)
        
        
        
        
        
        return () => {
            console.log("UnMounting")
            clearInterval(tim)
        }
    },[])



    return (
        <div>

        counter is : {counter}
            
        </div>
    )
}

export default Timer
