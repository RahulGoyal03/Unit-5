import React, {useState} from 'react'

import "./styles/GroceryInput.css"

const GroceryInput = ({getInput}) => {

    const [inputText, setInputText] = useState("")


    const handleInput = () => {
        if(!inputText) {
            alert("Please Fill Required Item")
            return
        }
            getInput(inputText)
            setInputText("")
    }

    return (
        <>

        <div className='input-box'>
            <input className='input' type="text" placeholder='Enter Grocery Items' value={inputText} onChange={(e) =>setInputText(e.target.value)}/>
            <button className='save' onClick={handleInput}>Save</button>
        </div>
            
        </>
    )
}

export default GroceryInput
