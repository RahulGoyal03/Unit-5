

import React ,{useState} from 'react'

const Child = ({value}) => (
<div> 
    <h1>Count is  : {value}</h1>
</div>

);

const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>{label}</button>
)

const Siblings = () => {
    const [count, setCount] = useState(0)
    const HandleChange = (value) => {
        setCount(count + value)
    }
    return (
        <div>
            <h1>SIBLINGS</h1>
            <Child value={count} handleDecrement={()=>HandleChange(-1)}
             handleIncrement={()=>HandleChange(1)}
            />
            <Button label="+" handleClick={() => HandleChange(1)}/>
            <Button label="-" handleClick={() => HandleChange(-1)}/>

        </div>
    )
}

export default Siblings
