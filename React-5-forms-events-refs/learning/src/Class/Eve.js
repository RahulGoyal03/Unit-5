import React, { useRef } from 'react'

const Events = () => {
    const test = useRef(1)
    const [d, setD] = React.useState(1)
    console.log("Rendered", test)
    return (
        <div>
            <button
            onClick={() => {
                test.current = test.current + 1;
                console.log(test)
            }}
            >Increment Test</button>

            <button
            onClick={() => {
                setD((p) => p+1)
            }}
            >
                Render
            </button>
        </div>
    )
}

export default Events
