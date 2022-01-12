import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TodoEdit = () => {
    const {id} = useParams()
    const [one, setOne] = useState({})
    const [text, setText] = useState()
    const navigate = useNavigate()
    const getOne = async () => {
        let res = await fetch(`http://localhost:5000/todo/${id}`)
        let dat = await res.json()
        setOne(dat)
        setText(dat.title)
    }

    const PostOne = async () => {

        const payload = {
            title : text,
            status : one.status
        }

         fetch(`http://localhost:5000/todo/${id}`, {
            method : "PUT",
            body : JSON.stringify(payload),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res) => res.json()).then((res) => {

            setOne(res)
            navigate("/")
        })
    }


    useEffect(() => {
       getOne()
    }, [])




    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={PostOne}>Update</button>
        </div>
    )
}

export default TodoEdit
