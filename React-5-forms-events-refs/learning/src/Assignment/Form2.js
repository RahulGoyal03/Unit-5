import React,{useState, useEffect, useRef} from "react";
import Table from "./Table"
import "./Form2.css"

const Form2 = () => {

    const ref = useRef(null)

    const [page, setPage] = useState(1)

    const [data, setData] = useState([])

    const [ord, setOrd] = useState("ASC")

    const [form, setForm] = useState({
    username : "",
    age : "",
    address : "",
    department : "",
    salary : "",
    marital : ""
    })


    const handleChange = (e) => {
      let file;
        if(ref.current.files.length !== 0){
            file = URL.createObjectURL(ref.current.files[0]);
          }
    let  {name , value, checked, type} = e.target
    value = type === "checkbox" ? checked : value;
    setForm({
        ...form,
        [name] : value,
        file : file
    })
    }

    
    const getData = (page) => {
        fetch(`http://localhost:5000/users?_page=${page}&_limit=3&_sort=salary&_order=${ord}`)
        .then(d => d.json())
        .then((res) => setData(res))
    }


    // useEffect(() => {
    //   getData(page)
    // },[page])

    useEffect(() => {

        getData(page)
    },[data])




    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers : {
              "Content-type" : "application/json"
            }
          }).then(() => {
          
            getData()
            setForm({})
          })
    }


    const PostData = () => {
        console.log("form:" , form)

        const payload = {
                username : form.username,
                age : form.age,
                address : form.address,
                department : form.department,
                salary : form.salary,
                marital : form.marital,
                file : form.file
          }
            fetch("http://localhost:5000/users", {
            method: "POST",
            body : JSON.stringify(payload),
            headers : {
              "Content-type" : "application/json"
            }
          }).then(() => {
          
            getData()

          })
    }

  
  return (

    <>

    <div className="MainBox">
    <div className="input_boxes">
      <input
      className="input-text"
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Enter Name"
      />{" "}
      <br />
      
      <input
      className="input-text"
        type="number"
        name="age"
        onChange={handleChange}
        placeholder="Enter Age"
      />{" "}
      <br />
      
      <input
      className="input-text"
        type="text"
        name="address"
        onChange={handleChange}
        placeholder="Enter Address"
      />{" "}
      <br />
      
  
      
      <input
      className="input-text"
        type="number"
        name="salary"
        onChange={handleChange}
        placeholder="Enter Salary"
      />{" "}
      <br />

      <select className="inputdepart" name="department" id="" onChange={handleChange}>
        <option  selected>
          Choose Department
        </option>
        <option value="d1">D1</option>
        <option value="d2">D2</option>
        <option value="d3">D3</option>
      </select>
      <br />
      
      <span>Married</span>
      <input className="inputcheckbox" type="checkbox" name="marital" onChange={handleChange} /> <br /> <br /><br />
      
      <span>Choose Your Profile Photo</span>
      <input
      className="mypic"
        type="file"
        name="profile"
        onChange={handleChange}
        ref={ref}
        accept="image/png image/jpg"
      />{" "}
      <br />
      
      <button className="SaveData" onClick={PostData}>Save</button>
    </div>

<Table data={data} handleDelete={handleDelete}/>



</div>
    <div className="button_box">

    <button className="prev" disabled={page === 1} onClick={() => setPage(page - 1)}>PREV</button>
    <button className="next" onClick={() => setPage(page + 1)}>NEXT</button>
    <button className="asc" onClick={() => setOrd("ASC")}>Increasing Order By Salary</button>
    <button className="desc" onClick={() => setOrd("DESC")}>Decreasing Order By Salary</button>
    </div>
</>
  );
};

export default Form2;
