import React from 'react'
import "./TableItem.css"

const TableItem = ({form, handleDelete}) => {

 let   {
        username,
        age,
        address,
        department,
        marital,
        file,
        salary,
        id
    } = form


    return (
        <div className='main_box' >
            <div>{username}</div>
            <div>{age}</div>
            <div>{address}</div>
            <div>{department}</div>
            <div>{salary}</div>
            <div>{marital ? "Married" : "UnMarried"}</div>
            <div className='img_box'>
                <img src={file} alt="" />
            </div>
            <div>

            <button className='deleted' onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default TableItem
