import React,{useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import './tododata.css'

const TodoData = () => {
    const {id} = useParams()
    const [one, setOne] = useState({})
    console.log(id)
    const getOne = async () => {
        let res = await fetch(`http://localhost:5000/todo/${id}`)
        let dat = await res.json()
        setOne(dat)
    }
    useEffect(() => {
       getOne()
    }, [])

    return (
        <div className='Item_box'>
            <p>{one.title}</p>
            <p>ID : {one.id}</p>
            <Link to={`/todo/${one.id}/edit`} className='link'><button>Edit</button></Link>

        </div>
    )
}

export default TodoData
