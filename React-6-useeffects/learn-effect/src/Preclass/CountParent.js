import React, {useState} from 'react'
import Count from './Count'

const CountParent = () => {
    const [showCount, setShowCount] = useState(false)
    return (
        <div>
            {showCount && <Count /> }

            <button onClick={() => setShowCount(!showCount)}>Show</button>
        </div>
    )
}

export default CountParent
