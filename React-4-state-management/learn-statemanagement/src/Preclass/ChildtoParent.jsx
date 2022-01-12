import React ,{useState} from 'react'

const Child = ({value, handleDecrement, handleIncrement}) => (
<div> 
    <h1>Count is  : {value}</h1>
    <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
    </div>

</div>

);

const ChildtoParent = () => {
    const [count, setCount] = useState(0)
    const HandleChange = (value) => {
        setCount(count + value)
    }
    return (
        <div>
            <h1>Child to Parent</h1>
            <Child value={count} handleDecrement={()=>HandleChange(-1)}
             handleIncrement={()=>HandleChange(1)}
            />
        </div>
    )
}

export default ChildtoParent
