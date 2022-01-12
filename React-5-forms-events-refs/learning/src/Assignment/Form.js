import React , {useRef, useState} from 'react'
import Table from './Table'
import {nanoid} from "nanoid"

const Form = () => {
    

    const [form, setForm] = useState({})

    const [data, setData] = useState([])

    const ref = useRef(null)

   function  PostData() {

        const payload = {
            username : form.username,
            age : form.age,
            address : form.address,
            department : form.department,
            salary : form.salary,
            marital : form.marital,
            file : form.file
        }

        fetch("http://localhost:2021/users", {
            method: "POST",
            body : JSON.stringify(payload),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .catch(e => console.log(e))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        form["id"] = nanoid(7)
        
 
        setData([form, ...data])

    }
    console.log("data :", data)

   

    const handleChange = (e) => {

        let file = URL.createObjectURL(ref.current.files[0])
      let  {name , value, checked, type} = e.target

      value = type === "checkbox" ? checked : value;

      setForm({
        ...form,
        [name] : value,
        file : file
    })
    }

    return (
        <>
            <div>
                <form method='POST' onSubmit={handleSubmit}>

                    <input type="text" name='username' onChange={handleChange} placeholder='Enter Name' />  <br />
                    <input type="number" name='age' onChange={handleChange} placeholder='Enter Age' />    <br />
                    <input type="text" name='address' onChange={handleChange} placeholder='Enter Address' />     <br />

                    <select name="department" id="" onChange={handleChange}>
                        <option value="" selected>Choose Department</option>
                        <option value="d1">D1</option>
                        <option value="d2">D2</option>
                        <option value="d3">D3</option>
                    </select>
                                                                                                <br />
                    <input type="number" name='salary' onChange={handleChange} placeholder='Enter Salary' />      <br />
                    
                    
                    <span>Married</span>


                    <input type="checkbox" name='married' onChange={handleChange} />    <br />
                    
                    
                    
                    <input type="file" name='profile' onChange={handleChange} ref={ref} accept='image/png image/jpg' />    <br />

                    <input type="submit" value="submit" />
                </form>

                <button onClick={PostData}>Save</button>


            <Table data={data}/>
                
            </div>
        </>
    )
}

export default Form
