import {add} from "./calc"
import("./index.css")
console.log(add(5,5))

console.log(add(3,5))


const h1 = document.createElement("h1")
h1.innerText = "Hello Webpack"
h1.classList.add("redcolor")

document.getElementById("root").appendChild(h1)