import React,{useState} from 'react'
// import {Button, Div} from "./styled/Button"

import { Button } from 'antd'


const Styled = () => {
    // const [theme, setTheme] = useState("light")
    return (
        <div style={{textAlign : "center"}}>

            <Button>Click Me antd</Button>
            {/* <Div>
                <p>Hi Ankit</p>
            </Div>
            <Button 
            theme={theme}
            onClick={() => {
                console.log("Clicked !")
            }}>Click Me</Button>


            <Button 
            theme={theme}
            onClick={() => {
                console.log("Clicked !")
            }}>Click Me</Button>


            <button onClick={() => {
                setTheme(theme === "light" ? "dark" : "light")
            }}>Toggle Theme</button> */}



        </div>
    )
}

export default Styled
