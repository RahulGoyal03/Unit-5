import React ,{useState} from 'react'

const Child = ({value}) => <h1>Count is  : {value}</h1>;

const ParenttoChild= () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Parent to Child</h1>
            <Child value={count} />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default ParenttoChild
