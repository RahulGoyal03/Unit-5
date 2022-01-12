import React from 'react'

const Forms = () => {
    const [form, setForm] = React.useState({
        username: "",
        age : "",
        address : "",
    })

    const ref = React.useRef(null)
    const handleChange = (e) => {
        console.log(ref.current.files)
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text"
                onChange={handleChange}
                name="usernane" placeholder='enter name' />
                <input type="number"
                onChange={handleChange}
                name="age" placeholder='enter age' />
                 <input type="text"
                onChange={handleChange}
                name="address" placeholder='enter address' />
              
              <input onChange={handleChange} type="file" ref={ref}/>
              
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Forms
