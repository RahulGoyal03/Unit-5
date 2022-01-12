import React,{useState, useEffect, useContext} from 'react'
import { useParams,  Navigate} from 'react-router-dom'
// import { AuthContext } from '../Context/AuthContext';

const UserDetail = () => {

    const {id} = useParams();
    const [data, setdata] = useState({})

    // const {token} = useContext(AuthContext)

    const getData = async() => {
        let res = await fetch(`https://reqres.in/api/users/${id}`)
        let dat = await res.json()
        console.log(dat)
        setdata(dat.data)
    }
    useEffect(() => {
       getData()
    }, [id])

    // if(!token) {
    //     return <Navigate to={"/login"}/>
    // }
    return (
        <div>
            <div>
                <img src={data.avatar} alt="" />
            </div>
            <div>{data.first_name}</div>
            <div>{data.email}</div>
        </div>
    )
}

export default UserDetail
