import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    

    const [data, setData] = useState([])
    const getData = async ()  => {
        let res = await fetch("https://reqres.in/api/users")
        let dat = await res.json()
        // console.log(dat.data)
        setData(dat.data)
    }
    useEffect(() => {
       getData()
    }, [])
    return (
        <div>
            {
                data.map((e) => (
                    <Link to={`/users/${e.id}`}>
                    {/* <div>
                        <img src={e.avatar} alt="" />
                    </div> */}
                    <div>{e.first_name}</div>
                    <div>{e.email}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Users
