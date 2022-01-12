import React,{useState} from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'
import { nanoid } from 'nanoid'
import "./styles/Grocery.css"
// if(localStorage.getItem("ReactTodo") === null) {
//     localStorage.setItem("ReactTodo", JSON.stringify([]))
// }


const getLocal = () => {
        let Data = localStorage.getItem("ReactTodo")

        if(Data) {
            return JSON.parse(Data)
        }else {
            return []
        }
}



const Grocery = () => {


    const [list, setList] = useState(getLocal())

    const handleInput = (data) => {

        const payload = {
            title : data,
            status : false,
            id : nanoid(5)
        }


        setList([...list, payload])
        localStorage.setItem("ReactTodo", JSON.stringify([...list, payload]))
    }

   const handledelete = (id) => {
        const updatedList = list.filter((curElem) => {
            return curElem.id !== id
        })

        setList(updatedList)
        localStorage.setItem("ReactTodo", JSON.stringify(updatedList))

   }
   

    

    
    return (
        <>
        <h1 className='head'>Grocery List</h1>

        <GroceryInput getInput={handleInput}/>

        <div className='Alldata'>

        {
            list.map((curElem) => (

                <GroceryList key={curElem.id} curdata={curElem} deleteItem={handledelete}/>
            ))
        }

        </div>
        </>
    )
}

export default Grocery
