import React from 'react'
import "./styles/GroceryList.css"

const GroceryList = ({curdata, deleteItem}) => {

    let {title, status, id} = curdata

    

    return (
        <>
            <div className='ListItems'>
                <div>{title}</div>
                <button className='purchased' onClick={() => deleteItem(id)}>Purchased</button>
            </div>
        </>
    )
}

export default GroceryList
