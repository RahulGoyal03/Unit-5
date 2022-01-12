import React from 'react'

const Counter = () => {
    const [counter, setCounter] = React.useState(5)

  const handleIncrement = (value) => {
    setCounter(counter + value)
  }

    return (
        <>

    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={() => handleIncrement(1)}>ADD</button>
    <button onClick={() => handleIncrement(-1)}>REDUCE</button>
            
        </>
    )
}

export default Counter
