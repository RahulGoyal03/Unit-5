import React,{useState, useEffect} from 'react'
import TableItem from './TableItem'
import "./Table.css"

const Table = ({data, handleDelete}) => {



    return (
        <>

        <div className='showbox'>
            <div className='HeadingTab'>
                <div>Name</div>
                <div>Age</div>
                <div>Address</div>
                <div>Department</div>
                <div>Salary</div>
                <div>Marital Status</div>
                <div>Profile Photo</div>
                <div>Remove</div>
            </div>


            <div className='listItems'>
            {  data.map((elem) => (
                <TableItem key={elem.id} form={elem} handleDelete={handleDelete}/>
            ))

            }
                
            </div>
        </div>

            
        </>
    )
}

export default Table
